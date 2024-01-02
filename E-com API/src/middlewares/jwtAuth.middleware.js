import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next)=>{
    //read the token
    const token = req.headers["authorization"]
    console.log(token);
    //if not
    if(!token)
    {
        return res.status(401).send("Unauthori")
    }
    //check if token is valid
    try{
        const payload = jwt.verify(token, '89LdsMTb9yjAODojYIQQc9QMV5gQdvvr')
        req.userID = payload.userID
        console.log(payload);
    }
    catch(err){
        console.log(err);
        return res.status(401).send("Unauthorized: Invalid Token");
    }
    next();
}

export default jwtAuth;