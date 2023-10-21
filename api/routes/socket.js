const io = require("socket.io");

module.exports = (server) => {
  const socketIo = io(server);

  socketIo.on("connection", (socket) => {
    console.log("a user has connected");
    socket.on("disconnect", () => {
      console.log("user has disconnected");
    });
    socket.on("message", (message) => {
      console.log("message:" + message);
    });
  });
};
