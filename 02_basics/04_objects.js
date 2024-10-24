//singleton using constructors

// const tinderUser = new Object()

const tinderUser={}
tinderUser.id = "1"
tinderUser.name = "suiii"

// console.log(tinderUser);

const user = {
    email:"mohan@",
    fullname: {
        firstname: "mohan",
        lastname: "varma"
    }
}

// console.log(user.email);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "d"
 }
// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}//mostly used, spread function same as arrays
// console.log(obj3)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty('isLoggedIn'));





