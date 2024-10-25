

function sayMyName(){
    console.log("mohan");
    console.log("varma");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result

}

const result = addTwoNumbers(2,3) 
// console.log("rsult",result)

function calculateCart(...num1){
    return num1
}

// console.log(calculateCart(200,200,304,234))

const user ={
    username: "mohan"
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username}`)
}

handleObject(user)

function returnS(arr){
    return arr[1]
}

console.log(returnS([4,6,7]))

