const server = require('./config/index.js')();
import { Server } from "socket.io";
import chatMessages from "./data";

module.exports = () => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("client:connected", () => {
      io.emit("server:connected", chatMessages);
    });

    socket.on("client:chat message", (msg) => {
      chatMessages.push(msg);
      io.emit("server:chat message", chatMessages);
    });

    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
  });
  return server;
};
