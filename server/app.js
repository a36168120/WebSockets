const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4000;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
const output = io.of("/output");

io.on("connection", socket => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
  // socket.on("change color", color => {
  //   if (color === "red") {
  //     color = "blue";
  //   } else {
  //     color = "red";
  //   }
  // io.sockets.emit("change color", color);
  // });
  socket.on("Input", mouseData => {
    console.log(mouseData);
    io.emit("Output", mouseData);
  });
});

// io.on("change color", socket => console.log("it worked"));

server.listen(port, () => console.log(`Listening on port ${port}`));
