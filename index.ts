import http from "http";
import express from "express";
import path from "path";
import redis from "redis";
import { Server } from "colyseus";

import session from "express-session";
import connectRedis from "connect-redis";

import { MyRoom } from "./MyRoom";

const port = Number(process.env.PORT || 2567);
const app = express()

// const RedisStore = connectRedis(session);
// const redisClient = redis.createClient();
const sessionParser = session({
  secret: "xxx secret xxx",
  // store: new RedisStore({ client: redisClient })
});

app.use(express.json())
app.use(sessionParser);
app.use(express.static(path.resolve("public")))

app.get("/set", (req, res) => {
  const data = req.query;

  for (let field in data) {
    req.session![field] = data[field];
  }

  res.redirect("/");
});

const server = http.createServer(app);
const gameServer = new Server({
  server,
  verifyClient: (info, next) => {
    console.log("Let's verify client...", info);
    sessionParser(info.req as any, {} as any, () => next(true));
  }
});

// register your room handlers
gameServer.define('my_room', MyRoom);

gameServer.listen(port);
console.log(`Listening on ws://localhost:${ port }`)
