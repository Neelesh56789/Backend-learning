import express from 'express'
import ProductController from './src/controllers/products.controller.js';
import path from 'path'
import ejsLayouts from 'express-ejs-layouts';
import validateMiddleware from './src/middlewares/validate.middleware.js';

const server = express();


server.use(express.static("public"));

//Parse from data
server.use(express.urlencoded({extended : true}));


//Setup view engine

server.set('view engine', 'ejs');
server.set("views", path.join(path.resolve(), 'src', 'views'));
server.use(express.json());

server.use(ejsLayouts);

//create an instance of the class

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/new', productController.getAddProduct);



server.get('/update-product/:id', productController.getProductById)
server.post('/delete-product/:id', productController.productsAfterDeletion)
server.post('/', validateMiddleware , productController.showProducts);
server.post('/update-product', productController.showUpdateProduct);

server.use(express.static('src/views'));

server.listen(3100);
console.log("Server is listening on port 3100");