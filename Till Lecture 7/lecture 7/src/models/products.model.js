export default class ProductModel {
    constructor(_id, _name, _desc, _price, _imgUrl){
        this.id = _id,
        this.name = _name,
        this.desc = _desc,
        this.price = _price,
        this.imageUrl = _imgUrl
    }

    static get(){
        console.log(products)
        return products;
    }
    static getUpdated(productObj){
        const index = products.findIndex((p)=> p.id == productObj.id)
        return products[index] = productObj;
    }

    static deleteProducts(id){
        const index = products.findIndex((p)=>p.id == id)
        return products.splice(index, 1);
    }
    static getNew(name, desc, price, imageUrl){
        let newProduct = new ProductModel(
            products.length + 1, 
            name, 
            desc, 
            price, 
            imageUrl
        );
        return products.push(newProduct);
    }

    static getById(id){
        return products.find((p)=>p.id==id)
    }
}

var products = [
    new ProductModel(
        1,
        'Atomic Habits',
        'This is the best book for daily habits',
        19.99,
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'

    ),
    new ProductModel(
        2,
        'Ikigai',
        'Best book to teach you life lessons',
        16.99,
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
        3,
        'Deep Work',
        'This describes the rules for focussed success in this distracted world',
        14.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    ), 
]
