const server = require('./sockets.js')();

server.listen(3000, () => {
  console.log("listening on port: ", 3000);
});
