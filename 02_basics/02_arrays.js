const brazil = ["Ronaldinho","ronaldo","vinicious.jr"]
const argentina = ['messi','dybala','alvarez']

// brazil.push(argentina)
// console.log(brazil);
// brazil.pop()
// console.log(brazil)

// const teams = brazil.concat(argentina)
// console.log(brazil);
// console.log(argentina);
// console.log(teams);

const newTeam = [...brazil,...argentina]//spread function
// console.log(newTeam);

const arr1 = [1,2,3,[1,5,6,[6,7,8]]]
const usable_arr=arr1.flat(Infinity)
// console.log(usable_arr)

console.log(Array.from("ramos"));

