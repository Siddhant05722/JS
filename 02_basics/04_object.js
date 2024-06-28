// const metaUser = new Object();         // this is singleton object

const metaUser = {}                        // this is non singleton object

metaUser.id = "123abc";
metaUser.name = "Ravi";
metaUser.isLoggedIn = false;

// console.log(metaUser);
                                                // Optional Chaining
const regularUser = {
    email:"ravi@google.com",
    fullname : {
        userFullName: {
        firstName : "Sunny",
        lastName : "Singh"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName.lastName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};
// const obj3 = {obj1, obj2};                       //combining objects

// const obj3 = Object.assign({}, obj1, obj2, obj4);


const obj3 = {...obj1, ...obj2, ...obj4};               //Spread Operator
// console.log(obj3);



                    // when you get values from database

const users = [
{
    id : 1,
    email : "singh@google.com"
},
{
    id : 1,
    email : "singh@google.com"
},
{
    id : 1,
    email : "singh@google.com"
}
]

users[1].email;

// console.log(metaUser);

// console.log(Object.keys(metaUser));
// console.log(Object.values(metaUser));
// console.log(Object.entries(metaUser));                      //it will make array from the object

// console.log(metaUser.hasOwnProperty('isLoggedIn'));





const course = {
    courseName : "JS",
    coursePrice : 999,
    courseInstructor : "Akshay"
}
// course.courseInstructor
                                                            // object destructuring
const {courseInstructor : instructor} = course;

console.log(instructor);




// ++++++++++++++++++++++ json api intro ++++++++++++++++++++


// {
//     courseName : "JS",
//     coursePrice : 999,
//     courseInstructor : "Akshay"
// }

// [
//     {}
//     {}
//     {}
// ]