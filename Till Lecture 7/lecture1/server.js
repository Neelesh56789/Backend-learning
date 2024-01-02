const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === '/product')
    {
        res.write("The is your product page");
    }
    else if(req.url === '/user')
    {
        res.write("This is your user page.");
    }
    else{
        res.write("Your Node JS server is running");
    }
    res.end();
})

server.listen(3100, ()=>{
    console.log("Your server is running on port 3100");
})