const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question("Enter the first number",(num1)=>{
    interface.question("Enter the second number", (num2)=>{
        // const sum = Number(num1)+Number(num2);
        // console.log(sum);
        num1 > num2 ? console.log(num1):console.log(num2);
    })
})