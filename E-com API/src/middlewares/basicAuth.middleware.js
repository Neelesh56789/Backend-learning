import UserModel from "../features/user/user.model.js";

const basicAuth = (req, res, next)=>{

    const authHeader = req.header("authorization");

    if(!authHeader)
    {
        res.status(401).send("No authorization applied here");
    }
    console.log(authHeader)
    //Extract the user credentials

    const base64Credentials = authHeader.replace('Basic ', '');
    console.log(base64Credentials)

    //Decode credetials

    const decodeCreds = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    console.log(decodeCreds); //[username : password]
    const creds = decodeCreds.split(':')

    //Check authentication

    const user = UserModel.getAll().find((u)=> u.email == creds[0] && u.password == creds[1])
    if(user)
    {
        next();
    }
    else{
        res.send("Invalid credetials");
    }
}

export default basicAuth;
