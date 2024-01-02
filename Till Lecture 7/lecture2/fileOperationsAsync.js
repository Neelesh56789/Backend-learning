const fs = require('fs')

fs.readFile('data.txt', (err, data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})

fs.writeFile('employee.txt', "Name: Neelesh, Age : 22", (err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("File is created");
    }
})

fs.appendFile('employee.txt', "name : Gaurav", (err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("The file is updated");
    }
})

fs.unlink('employee.txt', (err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("The file is deleted");
    }
})

console.log("This is another operation");