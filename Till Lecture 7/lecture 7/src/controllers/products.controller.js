import path from 'path';
import ProductModel from '../models/products.model.js';

export default class ProductController{
    getProducts(req, res){
        // console.log(path.resolve());
        let products = ProductModel.get();
        // console.log(products);
        res.render("products", {products, userEmail: req.session.userEmail });
        // res.sendFile(
        //     path.join(path.resolve(), 'src', 'views', 'products.html'),
        // )
    }

    getAddProduct(req, res){
        res.render("newProduct", {
            errorMessage: null,
            userEmail: req.session.userEmail 
        });
    }

    showProducts(req, res){
        const {name, desc, price} = req.body;
        const imageUrl = 'images/'+req.file.filename;
        ProductModel.getNew(name, desc, price, imageUrl);
        let products = ProductModel.get();
        // console.log("reaching controller",products)
        // console.log(req.body);
        res.render('products', {products, userEmail: req.session.userEmail });
    }

    getProductById(req, res, next){
        const id = req.params.id;
        console.log("ID check", id);
        const productFound = ProductModel.getById(id);
        console.log("productFound", productFound);
        if(productFound)
        {
            res.render('updateProduct', {
                product: productFound,
                errorMessage: null,
                userEmail: req.session.userEmail 
            });
        }
        else{
            res.status(401).send("Product not found");
        }
    }
    showUpdateProduct(req, res){
        ProductModel.getUpdated(req.body);
        var products = ProductModel.get();
        console.log(products);
        res.render('products', {products});
    }

    productsAfterDeletion(req, res){
        const id = Number(req.params.id);
        ProductModel.deleteProducts(id);
        let products = ProductModel.get();
        res.render('products', {products});
    }
}