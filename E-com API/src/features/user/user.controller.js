import UserModel from "./user.model.js"
import jwt from "jsonwebtoken";

export default class UserController{

    getSignup(req, res){
      const {name, email, password, type} = req.body
      const user = UserModel.Signup(name, email, password, type);
      console.log("user",user);
      res.status(201).send(user)  
    }

    getSignin(req, res){
        const {email, password} = req.body
        const verified = UserModel.Signin(email, password);
        if(!verified)
        {
            return res.status(404).send("Invalid User")
        }
        
        else{

            //Create token
            const token = jwt.sign({userID : verified.id, email : verified.email}, "89LdsMTb9yjAODojYIQQc9QMV5gQdvvr", {
                expiresIn: "100h"
            })
            return res.status(200).send(token)
        }
    }
}