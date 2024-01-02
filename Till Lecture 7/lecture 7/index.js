import express from 'express'
import ProductController from './src/controllers/products.controller.js';
import path from 'path'
import ejsLayouts from 'express-ejs-layouts';
import validateMiddleware from './src/middlewares/validate.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
import UserController from './src/controllers/user.controller.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastvisit.middleware.js';

const server = express();


server.use(express.static("public"));

//Parse from data
server.use(express.urlencoded({extended : true}));
server.use(cookieParser());
server.use(session({
    secret:'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {secure : false},
}))


//Setup view engine

server.set('view engine', 'ejs');
server.set("views", path.join(path.resolve(), 'src', 'views'));
server.use(express.json());

server.use(ejsLayouts);

//create an instance of the class

const productController = new ProductController();
const userController = new UserController();


server.get('/register', userController.getRegister);
server.get('/login', userController.getLogin);
server.post('/register', userController.postRegister);
server.post('/login', userController.postLogin);
server.get('/logout', userController.logout);

server.get('/', setLastVisit, auth, productController.getProducts);
server.get('/new', auth,  productController.getAddProduct);



server.get('/update-product/:id', auth, productController.getProductById)
server.get('/delete-product/:id', auth, productController.productsAfterDeletion)
server.post('/', uploadFile.single('imageUrl') ,auth, validateMiddleware, productController.showProducts);
server.post('/update-product', auth, productController.showUpdateProduct);

server.use(express.static('src/views'));

server.listen(3100);
console.log("Server is listening on port 3100");