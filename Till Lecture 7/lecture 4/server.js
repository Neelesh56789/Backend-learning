const http = require('http')

const server = http.createServer((req, res)=>{
    res.end("Welcome to NodeJS server");
})

const PORT = 3100
server.listen(3100,()=>{
    console.log('Your nodeJS server is listening.');
})