# `colyseus` + `express-session`

Demonstration on how to use `express-session` along with `onAuth()` in Colyseus.

See implementation on:
- `index.ts`
- `MyRoom.ts` (`onAuth` method)

## Running it locally

```
npm install
npm start
```

- Go to [`http://localhost:2567/set?x=y`](http://localhost:2567/set?first_field=1&second_field=2&third_field=3) to set dummy session values
- Go to [`http://localhost:2567/`](http://localhost:2567/) to connect to `MyRoom`


## License

MIT
