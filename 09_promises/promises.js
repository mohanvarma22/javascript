// // promises are of two types

// // pending,fulfilled,rejected

// //promise is an object representing eventual completion

// //promise is either consumed or created
// const promiseOne = new Promise((resolve,reject)=>{
//     //do an async task
//     //DB calls, cryptography, network
//     setTimeout(()=>{
//         console.log('Async task is completed');
//         resolve()
//     })
// },1000)

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "mohan",email:"mohanv@"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:"mohan",password:"2210"})
//         }
//         else{
//             reject('ERROR')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.usernamee
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log("project is either resolved or rejected"))

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:"mohan",password:"2210"})
//         }
//         else{
//             reject('ERROR')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }

// async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     }catch(error){
//         console.log(error)
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error)=>console.log(error))