const user = {
    username: "Mohan",
    gender: "Male",
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome`);
        // console.log(this)
    }
}

user.welcomeMessage()
user.username = "Mohan Varma"
user.welcomeMessage()
// console.log(this)
//this keyword talks about the current context

// const biryani = () => {
//     let username = "Mohan"
//     console.log(this);

// }

// biryani()

// const addTwo = (num1,num2) => {
//     console.log(num1+num2)
// }



// const addTwo = (num1,num2) => console.log(num1+num2) implicit function
addTwo(2,3)
//curly braces lo return vadali brackets lo akkarledu

