

function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("N");
    console.log("G");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(3,4);


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Result: ", result);
    // return result

    // We can also write 

    return number1 + number2

}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Singh"));


function loginUserMessage(username = "Ravi"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());               // If you pass any value, it will override



function calculateCartPrice(val1, val2, ...num1){                   //rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 900));


const user = {
    username: "Rahul",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)