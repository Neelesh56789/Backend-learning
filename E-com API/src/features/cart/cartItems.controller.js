import CartItemModel from "./cartItems.model.js";

export class CartItemController{

    add(req, res){
        const {productID, quantity} = req.query;
        const userID = req.userID;
        CartItemModel.add(userID, productID, quantity)
        res.status(201).send('Cart item is added');
    }

    get(req, res){
        const userID = req.userID;
        const cart = CartItemModel.get(userID)
        console.log(cart);
        res.status(201).send(cart)
    }

    delete(req, res){
        const userID = req.userID;
        const cartIemID = req.params.id;
        const error = CartItemModel.delete(cartIemID, userID)
        if(error)
        {
            res.status(404).send(error);
        }
        else{
            res.send("Cart item is deleted");
        }
    }
}