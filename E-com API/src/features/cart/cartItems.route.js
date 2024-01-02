import express from "express";
import { CartItemController } from "./cartItems.controller.js";

const cartRouter = express.Router();

const cartItemController = new CartItemController();

cartRouter.delete('/cartitems/:id', cartItemController.delete);
cartRouter.post('/cart', cartItemController.add);
cartRouter.get('/cartitems', cartItemController.get);

export default cartRouter;