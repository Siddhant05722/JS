// array


const myArr = [0,1,2,3,4,5]

// console.log(myArr[]);

const names = ["Ravi", "Rahul", "Raj"];
// console.log(names[2]);

const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[2]);

// Array Methods +++++++++++++++++++++++++++++++++++++++

// myArr.push(7);
// myArr.push(8);
myArr.pop();
// console.log(myArr);

//console.log(myArr.includes(5));               // for boolean
//console.log(myArr.indexOf(8));                 // method returns -1 if the value is not found.

// const newArr = myArr.join();                    // change array into String
// console.log(myArr);
// console.log(newArr);


//      slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log("slice" ,myn1);
console.log("B" ,myArr);

const myn2 = myArr.splice(1,3);
console.log("C" ,myArr);
console.log("splice" ,myn2);