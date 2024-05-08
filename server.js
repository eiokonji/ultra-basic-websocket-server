// utilize web socket server

import { WebSocketServer } from "ws";

const wsserver = new WebSocketServer({ port: 80 });

wsserver.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(`message received:  ${data}`);
  });

  ws.send(`hello from server! Num clients: ${wsserver.clients.size}`);
});
