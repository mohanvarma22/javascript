"use strict"; //treat all JS code as newer version

// alert("hello") cannot be used in nodejs, use browser

// console.log(5)
// console.log("mohan")

//read documentation from mdn

let name ="mohan"//string
let age=18 //int
let isLoggedIn=false//boolean
//bigint if the number is tooo big
//null => standalone value
//undefined 
//symbol => unique

//object
// console.log(typeof null)

// null type object

//primitive  data type call by value
// 7 types: String,number,boolean,null,symbol,bigint

//non primitive reference type
// Arrays,objects,Functions

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);
// console.log(id)
// console.log(anotherId)

// const heros =["mohan",'varma']//arrays

// let myObj = {
//     name:"mohan",
//     age:21
// }

// console.log(myObj)

// const myFunction = function(){
//     console.log("Hi Guysss")
// }

// myFunction()

//stack(primitive)  in primitve only the copy is shared
//heap(non-primitive) in non primitive original value's reference is shared

// let s = "mohan"
// let m = s
// m = "Mohan"
// console.log(s);
// console.log(m)

// let user = {
//     email: "user@google.com",
//     upi: "user@ibl"
// }

// let user2 = user

// user2.email="mohanvarma"

// console.log(user);
// console.log(user2)

/*as you can see here the value of user 
is also changed when you change the value pf user2 */



