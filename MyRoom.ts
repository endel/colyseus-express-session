import http from "http";
import { Room, Client } from "colyseus";

export class MyRoom extends Room {

  onCreate (options: any) {
  }

  onAuth(client: Client, options: any, request: http.IncomingMessage) {
    const session = (request as any).session;
    console.log(session);

    // send entire session back to the client for demonstration purposes
    this.send(client, session);

    return true;
  }

  onJoin (client: Client, options: any) {
  }

  onMessage (client: Client, message: any) {
  }

  onLeave (client: Client, consented: boolean) {
  }

  onDispose() {
  }

}
