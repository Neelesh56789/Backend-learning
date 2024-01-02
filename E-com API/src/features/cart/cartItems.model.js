export default class CartItemModel{
    constructor(userID, productID, quantity, id){
        this.userID = userID,
        this.productID = productID,
        this.quantity = quantity,
        this.id = id
    }

    static add(userID, productID, quantity){
        const cartItem = new CartItemModel(
            userID,
            productID,
            quantity,
        )
        cartItem.id = cartItems.length+1;
        cartItems.push(cartItem);
        return cartItem
    }

    static get(userID){
        return cartItems.filter((u)=>u.userID==userID)
    }

    static delete(cartItemID, userID){
        const cartItemIndex = cartItems.findIndex((i)=> i.id == cartItemID && i.userID == userID)
        if(cartItemIndex == -1){
            return ("This item is not in the cart")
        }
        else{
            cartItems.splice(cartItemIndex, 1);
        }
    }
}

var cartItems = [
    new CartItemModel(2, 1, 1, 1),
    new CartItemModel(1, 1, 2, 1)
]

