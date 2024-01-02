import express from "express";
import productRouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.routes.js";
import basicAuth from "./src/middlewares/basicAuth.middleware.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import cartRouter from "./src/features/cart/cartItems.route.js";
import cors from 'cors';
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import ApplicationError from "./src/error-handler/applicationError.js";

const server = express();

//CORS policy configuration

server.use(cors());
// server.use((req, res, next)=>{
//     res.header('Access-Control-Allow-Origin', "*")
//     res.header("Access-Control-Allow-Headers", "*")
//     res.header("Access-Control-Allow-Methods", "*")
//     if(req.method=="OPTIONS"){
//         return res.sendStatus(200);
//     }
//     next();
// })

server.use(bodyParser.json());
//for all the requests related to product will redirect to products
//localho://3000/api/products

server.use(loggerMiddleware)
server.use('/api/users', userRouter)
server.use('/api', jwtAuth, cartRouter)
server.use('/api/products',jwtAuth,  productRouter)

server.use((err, req, res, next)=>{
    console.log(err);
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }
    res.status(503).send("Something went wrong, please try again later")
    next();
})

server.get('/', (req, res)=>{
    res.send("Welcome to the API making of the e-commerce project");
})



//Middleware to handle no route(that we have specified here) situation 
server.use((req, res)=>{
    res.status(404).send("API does not found");
})

server.listen(3000, ()=>{
    console.log("Server is listening on 3000");
})