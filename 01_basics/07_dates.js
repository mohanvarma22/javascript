let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let anotherDate = new Date(2023,0,23)
// console.log(anotherDate.toDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)

anotherDate.toLocaleString('default',
    {
        weekday: "long"
       
    }
)

console.log(anotherDate);