import path from 'path';
import ProductModel from '../models/products.model.js';

export default class ProductController{
    getProducts(req, res){
        // console.log(path.resolve());
        let products = ProductModel.get();
        // console.log(products);
        res.render("products", {products: products});
        // res.sendFile(
        //     path.join(path.resolve(), 'src', 'views', 'products.html'),
        // )
    }

    getAddProduct(req, res){
        res.render("newProduct", {
            errorMessage: null,
        });
    }

    showProducts(req, res){
        ProductModel.getNew(req.body);
        let products = ProductModel.get();
        // console.log("reaching controller",products)
        // console.log(req.body);
        res.render('products', {products: products});
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
            });
        }
        else{
            res.status(401).send("Product not forund");
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