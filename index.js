const { Socket } = require("socket.io");

const app = require("express")();
const http = require("http").createServer(app);
// npm install express socket.io
const io = require("socket.io")(http);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

io.on("connection", (socket) => {

  io.emit('conectado','Estou conectado')

  socket.broadcast.emit('novo usuario', 'novo usuario se conectou!')


  console.log("Usuario conectado!");
  socket.on("disconnect", () => {
    console.log("Desconectado!");
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
