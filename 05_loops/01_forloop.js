//for

for(let index=0; index < 10;index++){
    const element = index;
    // console.log(element);

}
//nested loops
//break, continuw

//for of(array specific loops)

const arr = [1,2,3,4,5,6]

// for (const num of arr){
//     console.log(num);
// }

const greetings = "hello guys"
for (const greet of greetings){
    // console.log(greet);
}

//maps only unique values and maintains the order
const map = new Map()
map.set('IN',"india")
map.set("usa","america")
map.set('IN',"india")

for (const [key,value] of map){
    console.log(key,  ':', value);
}