
// Object.create() ila constructor use chesi cheste singleton creeate avtundi

//object literals
const user = {
    name: "mohan",
    age: 21,
    location: "Hyderabad",
    email: "Mohan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday"]
}

// console.log(user.email);
//or
// console.log(user["email"])

user.email="mohanva"

// Object.freeze(user)//to lock

//symbol use cheyali ante use [mySym] brackets use cheyali

user.greeting = function(){
    console.log("Hi guysss");
}

user.greetingTwo = function(){
    console.log(`Hi, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingTwo())
