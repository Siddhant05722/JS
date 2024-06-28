const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof(balance));
// console.log(balance.toFixed(2));

const otherNumber = 1124.5954;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++


// console.log(Math.abs(-45));
// console.log(Math.round(14.25));
// console.log(Math.ceil(14.25));
// console.log(Math.floor(14.25));
// console.log(Math.min(5,9,3,8,2));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);