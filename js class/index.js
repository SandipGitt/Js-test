//I am using var keyword
var a="123"
console.log(a)

//I am using let keyword
let b ='456';
console.log(b);

const c = 789;
console.log(c);

// alert("Hello World!");

// const age = prompt('Hey, how are you');
// console.log(age);

// const isBoss = confirm("Are you student");
// console.log(isBoss);

let x =1;
const y = 2;
if (x ==1) {
    console.log("x is 1");
}
if (x === 1 && y === 2){
    console.log("&& operator tested");
}
if ((x= 1) || (y =3)){
    console.log("|| operator tested");
}
if ((x= 1) != (y =3)){
    console.log("!= operator tested");
}