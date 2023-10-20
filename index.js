const express = require("express");

const port = 5020

const Router = require("./Routes");

const cors = require("cors")

const server = express();

server.use(cors({
    origin:"*"
}));

server.get("/",(req,res)=>{
    res.send("Api is running")
});

server.use("/api/blogsite/main",Router)

server.listen(port,()=>{
    try{
        console.log("server is live on port 5020");
    }
    catch(err){
        console.log("404 found"+err);
    }
})