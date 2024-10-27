const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby"

}

//objects ki for vadali ante we have to use for in 

for (const key in myObj){
    // console.log(key);
    // console.log(myObj[key])
}

arr=['js','python']
for (const key in arr) {
    console.log(arr[key]);
}

//arr => for of
//obj => for in 