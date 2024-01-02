import userModel from "../models/userRegister.js";
import ProductModel from "../models/products.model.js";

export default class UserController{

    getRegister(req, res){
        res.render('register');
    }

    getLogin(req, res){
        res.render('login', {
            errorMessage: null,
        });
    }

    postRegister(req, res){
        const {name, email, password} = req.body;
        userModel.add(name, email, password);
        res.render('login', {
            errorMessage: null,
        });
    }

    postLogin(req, res){
        const {email, password} = req.body;
        const found = userModel.isValid(email, password);
        console.log(found);
        if(!found){
            return res.render('login',{
                errorMessage: "User not found"
            })
        }
        req.session.userEmail = email;
        console.log(req.session.userEmail);
        var products = ProductModel.get();
        // console.log(products);
        res.render('products', {products, userEmail: req.session.userEmail });
    }

    logout(req, res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/login')
            }
        })
        res.clearCookie('lastVisit');
    }
}
