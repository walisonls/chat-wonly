const express = require("express");
const app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/pages/home.html")
})


const adress = 5050;
app.listen(adress,()=>{
    console.log("Server Runing....")
    console.log("Open page in: http://localhost:"+adress+"/");
})