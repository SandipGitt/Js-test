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

// let x =1;
// const y = 2;
// if (x ==1) {
//     console.log("x is 1");
// }
// if (x === 1 && y === 2){
//     console.log("&& operator tested");
// }
// if ((x= 1) || (y =3)){
//     console.log("|| operator tested");
// }
// if ((x= 1) != (y =3)){
//     console.log("!= operator tested");
// }

// if (x == 1){
//     console.log("x is 1");
// }else {
//     console.log("x is not 1");
// }

// let result = x === 1 ? "x is 1" : "x is not 1";
// console.log(result);

// result = x === 1 ? "x is 1" : x === 2 ? "x is 2" : " x is not 1 or 2";
// console.log(result)

// for ( let i = 0; i < 10; i++){
//     console.log(i);
// }

// learning about functions
// ES5 Style
// function add(a,b){
//     console.log(a+b);
// }
// ES6 style(Arrow Function)
const add = (a,b) =>{
    console.log(a+b);
};

function area(a,b){
    return a *b;
}
add(19,17);
add(5,9);