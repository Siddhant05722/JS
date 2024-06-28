// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id == anotherId);

// const bigNumber = 123456789n;

// Reference (Non-Primitive)

// Array, Object, Function

// const productNames = ["Sheet", "Pen", "Paper"];
// let myObj = {
//     name : Rahul,
//     age : 22
// }

const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof outsideTemp);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myMail = "xyz@gmail.com";
let newMail = myMail;
newMail = "abc@gmail.com";

console.log(myMail);
console.log(newMail);


let userOne = {
    email : "sid@gmail.com",
    upiId : "sid@ybl"
}

let userTwo = userOne
    
userTwo.email = "riz@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
