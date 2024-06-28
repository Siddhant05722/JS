//  singleton
//  Object.create                 //through constructor method

//  object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Delhi",
    email: "rahul@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Friday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "rahul@yahoo.com";
// console.log(JsUser.email);
// Object.freeze(JsUser);
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser,greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);