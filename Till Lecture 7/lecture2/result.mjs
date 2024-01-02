// const aritmeticModule = require('./arithmetic');

// const data = aritmeticModule.sum(10, 20);
// // const data2 = aritmeticModule.division(10,2);
// console.log(data);
// // console.log(data2);



import * as arithmeticModule from './arithmetic.mjs';
import axios from 'axios';

const data = arithmeticModule.sum(10, 20);
console.log(data);


const Solution = async function (){
    const result = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    const data3 = result.data;
    console.log(data3);
}

Solution();


