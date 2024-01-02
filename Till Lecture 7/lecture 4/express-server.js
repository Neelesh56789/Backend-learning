const express = require('express');

const server = express();


function firstMiddleware(req, res, next){
    console.log("This is first middleware");
    next();
}

function secondMiddleware(req, res, next){
    console.log("This is second middleware.");
    next();
}

function globalMiddleware(req, res, next){
    console.log("this is global middleware");
    next();
}

server.use(globalMiddleware);

//Get Request

// server.get("/", (req,res, next)=>{
//         console.log("First middleware is hit");
//         next();
//     },  
//     (req, res)=>{
//         res.send("Welcome to expressJS server");
//     }
// )


//Alternate way of write 

// server.get('/', firstMiddleware, secondMiddleware, (req, res, next)=>{
//     console.log("First middle ware is hit");
//     next();
// })
server.get('/', [firstMiddleware, secondMiddleware] , (req, res)=>{
    // console.log("Second middle ware is hit");
    res.set('Content-type', 'text/plain');
    res.send("Welcome to expressJS server");
})

//Post request

server.post('/', (req, res)=>{
    res.status(201).send("This is post rquest");
})

//Put request(for updation)

server.put('/', (req, res)=>{
    res.send("This is update rquest");
})

//delete request

server.delete('/', (req, res)=>{
    res.send("This is delet rquest");
})


server.listen(3100, ()=>{
    console.log("server is listening on port 3100");
})