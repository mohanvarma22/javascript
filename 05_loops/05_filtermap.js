const coding = ['js','python','c']

// const values = coding.forEach((item)=>{
//     console.log(item);
        // return item
// })

// console.log(values); return avvadu ila foreach lo

// const nums = [1,2,3,4,5]

// const newNums = nums.filter((num)=>num>4)
// console.log(newNums);

// const newNums = nums.filter((num) => {
//     return num > 2

// })

// const newNums = []
// nums.forEach((num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);//return cheyyalante ila

const nums = [1,2,3,4,4]

// const newNums = nums.map((item) => {
//     return item + 10
// })


//chaining
const newNums = nums.map((num) => num * 10).map((num) => num - 10).filter((num) => num % 6 == 0)
// console.log(newNums);

//reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval) => {
    console.log(`${acc} and ${currval}`);
    return acc + currval
},0)