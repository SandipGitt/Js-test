//I am using var keyword
// var a="123"
// console.log(a)

// //I am using let keyword
// let b ='456';
// console.log(b);

// const c = 789;
// console.log(c);

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
// const add = (a,b) =>{
//     console.log(a+b);
// };

// function area(a,b){
//     return a *b;
// }
// add(19,17);
// add(5,9);


// Objects

// const person ={
//     firstName:"John",
//     lastName: "Doe",
//     fullName:() =>{
//     return `${person.firstName} ${person.lastName}`;
//     },
// };

// const c =person.firstName;
// const a = person.fullName();
// console.log(c,a);

// const human ={
//     hobby:"Playing Games",
//     aim:"To be a cricket player",
//     ambition:() =>{
//     return `${human.hobby} ${human.aim}`;
//     }
// }
// const s =human.hobby;
// const b = human.ambition();
// console.log(s,b);

// Arrays
const arr =["Hyundai","Merceedes","BMW","Lamborghini"];
// access the first item
const d =arr[0];
console.log(d);
// access the last time
const e = arr[arr.length-1];
console.log(e);
