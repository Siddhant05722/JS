// +++++++++++++++++++++ dates ++++++++++++++++++++++

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 5, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 5, 23, 5, 4);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("06-24-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());     For hotel/room booking
// console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{weekday: "long"});