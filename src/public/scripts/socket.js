const socket = io();

const sendChat = (message) => {
  socket.emit("client:chat message", message);
};

const socketConnected = () => {
  socket.emit("client:connected");
};

socket.on("server:connected", (messages) => {
  listMessages(messages);
});

socket.on("server:chat message", (messages) => {
  listMessages(messages);
});
