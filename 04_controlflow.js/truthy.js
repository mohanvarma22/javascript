const userEmail = "mohan@mail"//empty unte false emaina unte true

// if (userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("dont have email")
// }
//falsy values
// false,0,"",-0,null,undefined,Nan only these are considered as falsy values
//remaining values are considered as true
//truthy values
//'0','false', '  ',[],{},function(){}

const emptyObj = {
    name: "ronaldo"
}
//object.keys ante array format lo ochiddi
// if (Object.keys(emptyObj).length===1){
//     console.log("Guyss");
// }

// console.log(Object.keys(emptyObj))

// Nullish coalescing operator(??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
console.log(val1)
console.log(val2)
console.log(val3)

// terniary operator

// condition ? true : false

const ice = 100
ice<=80 ? console.log("less than 80") : console.log("more than 80")






