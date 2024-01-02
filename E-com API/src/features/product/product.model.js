import ApplicationError from "../../error-handler/applicationError.js";
import UserModel from "../user/user.model.js";
export default class ProductModel{
    constructor(id, name, desc, price, imageUrl, category, sizes){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.imageUrl=imageUrl;
        this.category=category;
        this.sizes=sizes;
    }

    static add(product){
      product.id = products.length+1;
      products.push(product)
      return product;
    }

    static filter(minPrice, maxPrice, Category){
      const result  = products.filter((p)=>{
        return (
          (!minPrice || p.price>=minPrice) && 
          (!maxPrice || p.price<=maxPrice) && 
          (!Category || p.category == Category)
        )
      })
      return result;
    }

    static get(id){
      const result = products.find((p)=> p.id == id)
      return result;
    }

    static getAll(){
        return products;
    }


    static rateProduct(userID, productID, rating){
      //Validate User
      const user = UserModel.getAll().find((u)=>u.id == userID)
      if(!user)
      {
        throw new ApplicationError("User not found");
      }
      //Validate Product
      const product = products.find((p)=>p.id == productID)
      if(!product)
      {
        throw new ApplicationError("Product not found")
      }
      //Check if there are any ratings, if not then add ratings array.
      if(!product.ratings)
      {
        product.ratings = [];
        product.ratings.push({
          userID : userID,
          rating : rating
        })
      }
      //Check if user rating is already available
      else{
        const existingRatingIndex = product.ratings.findIndex((r)=>r.userID == userID)
        if(existingRatingIndex>=0){
          product.ratings[existingRatingIndex]={
            userID : userID,
            rating : rating,
          }
        }
        //if no rating exist then add new rating
        else{
          product.ratings.push({
            userID : userID,
            rating : rating
          })
        }
      }
      

    }
} 

var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Category1'
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Category2',
      ['M', 'XL']
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Category3',
      ['M', 'XL','S']
    )];