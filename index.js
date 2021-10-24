const { Socket } = require("socket.io");

const express = require("express")
const app = express();
const http = require("http").createServer(app);
// npm install express socket.io
const io = require("socket.io")(http);

app.use("/public",express.static("public"))


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

io.on("connection", (socket) => {

  socket.on('chat message',(obj)=>{
    console.log(obj);
  })

  
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
