const ctsEmp = ["Rahul", "Ravi", "Rakesh"];
const tcsEmp = ["Ashish", "Abhinav", "Aman"];

// ctsEmp.push(tcsEmp);

// console.log(ctsEmp);
// console.log(ctsEmp[3][1]);


// ctsEmp.concat(tcsEmp);
// console.log(ctsEmp);

const allEmp = ctsEmp.concat(tcsEmp);
// console.log(allEmp);

const all_Emp = [...ctsEmp, ...allEmp];             // Spread Operator
// console.log(allEmp);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6 , 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Siddhant"));
// console.log(Array.from("Siddhant"));
// console.log(Array.from({name : "Siddhant"}));                 // making arrays using keys

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));