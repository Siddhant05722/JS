// This is {} scope when it is using with if else or function.


// var  = 300;                                            output 300    //this is global scope
let a = 300;

if(true){
let a = 10;
const b = 20;                      // output 10            // this is block scope
// var c =30;
// console.log("Inner : ", a);
}
// console.log(a);                                 
// console.log(b);
// console.log(c);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


function one(){
    const username = "Rahul";

    function two(){
        const website = "Singh"
        // console.log(username);
    }
    // console.log(website);                    // this console is out of scope
    
    two();
}
// one()

if(true){
    const username = "Rahul";
    if (username === "Rahul"){
        const website = "Singh"
        // console.log(username +" "+ website)
    }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



console.log(addOne(5))
function addOne(num){
    return num + 1;
}


                                    // Both are functions but sometime we can say it, expression because it is variable, (it can hold anything json, values, functions)


console.log(addTwo(5))                  
const addTwo = function(num){               //this is hoisting
    return num + 2;
}
