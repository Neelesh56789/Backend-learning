const http = require('http')

const server = http.createServer((req, res)=>{

    let body = '';
    if(req.method == "POST"){
        console.log(req.body);
        
        req.on('data', (chunk)=>{
            body+=chunk;
        })
        req.on('end', ()=>{
            console.log(body);
            res.end(body);
        })
    }else{
        console.log("Function is called");
        res.end("Welcome to NodeJS server");
    }
    
    
    
})

server.listen(3100);
console.log("server is listening on port : 3100");