const arr = [0,1,3]
//resizable,mixed data types
//shallow coppies share the sane reference the original value gets changef
//deep copy just a copy is passed
// arrays lo copy use cheste shallow copy avtundi
const myPlayers = ['Ronaldinho', "messi"]
console.log(myPlayers[0]);

//Array methods

myPlayers.push('neymar')
console.log(myPlayers)

myPlayers.pop()
console.log(myPlayers)

myPlayers.unshift('neymar')
console.log(myPlayers)

myPlayers.shift()
console.log(myPlayers)

console.log(myPlayers.includes('messi'))
console.log(myPlayers.indexOf('Ronaldinho'))

const newArr = myPlayers.join()
console.log(newArr)

//if we use slice then the deep copy is only passed
//but in splice the shallow copy that is the original itself is changed