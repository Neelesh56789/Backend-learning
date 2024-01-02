const express = require('express');

const server = express();

server.get('/', (req, res)=>{
    return res.send("Welcome to NodeJS server");
})

server.use(express.static('public'));


server.listen(3100, ()=>{
    console.log("server is listening on 3100");
})