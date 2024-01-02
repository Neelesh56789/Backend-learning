const fs = require('fs')

// const buffer = fs.readFileSync('data.txt', {encoding : "utf-8"});
// // console.log(buffer.toString());
// console.log(buffer);

try{
    fs.writeFileSync('operations.txt', "Name : Neelesh, Age : 21, FN: RKT")
}

catch(err){
    console.log(err);
}

try{
    fs.appendFileSync('operations.txt', "Name : GAurav, Age : 24, FN : SNT");
}
catch{
    console.log("File doesn't exist");
}

fs.unlinkSync('operations.txt');


