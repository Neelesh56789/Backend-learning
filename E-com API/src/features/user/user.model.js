export default class UserModel{

    constructor(name, email, password, type, id){
        this.name = name,
        this.email = email,
        this.password = password,
        this.type = type, 
        this.id = id
    }

    static Signup(name, email, password, type){
        const newUser = new UserModel(
            name,
            email,
            password,
            type
        )
        newUser.id = users.length+1
        users.push(newUser)
        return newUser;
    }

    static Signin(email, password) {
        const jkl=users.find(u => u.email === email && u.password === password);
        console.log("jkl",jkl);
        return jkl;
    }
    
    static getAll(){
        return users;
    }


}

var users = [
    {
        id: 1,
        name: "Neelesh",
        email: "seller@gmail.com",
        password: "ecom@123",
        type: "Seller"

    },
    {
        id: 2,
        name: "Customer",
        email: "customer@gmail.com",
        password: "customerecom@123",
        type: "Customer"

    }
]