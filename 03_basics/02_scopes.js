
if (true){
    let a = 100
    const b = 30
    var c =20
}
// console.log(a);
// console.log(b);
// console.log(c);

//block scope,global scope
function one(){
    const userName="mohan"
    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website)
    two()
}

one()

/*as you can see here the function two(smaller function) can
access the bigger one but the bigger one cant access the smaller one 
because the smaller one considers the username variabe as global variable and
access it*/

//observation the code executed line by line

//ways of creating functions

// console.log(addOne(5)) idi error radu mundu call chesina
function addOne(num){
    return num + 1
}

// console.log(addTwo(5)) idi error ochiddi find out why
const addTwo = function(num){
    return num+1
}