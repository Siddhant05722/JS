// Create a new promise
const promiseOne = new Promise(function(resolve, reject) {
    // Simulate an async task (e.g., DB calls, cryptography, etc.)
    setTimeout(function() {
        console.log("Async task is completed");
        resolve(); // Fulfill the promise
    }, 1000);
});

// Consume the promise
promiseOne.then(function() {
    console.log("Promise consumed");
});




//creating a promise waithout making variable


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise without var consumed")
})


// Create a promise for data consumption
let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: "sid", email: "sid123@gmail.com" })
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
            if (!error){
                resolve({username:"sid", emial:"sid05722"})
            } else{
                reject('ERROR: Something went wrong')
            }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {                         //this is called chaining
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("Either resolve or rejected"))






const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
            if (!error){
                resolve({username:"siddhant", password:"sid05722"})
            } else{
                reject('ERROR: JS went wrong')
            }
    }, 1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive()




// To fetch api using async

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data);
//     }catch (error) {
//         console.log("E: ", error)
//     }
    
// }

// getAllUsers()


// To fetch api using try catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))