/* -----------------------------------

Hello World file 

Install Node.js
Install Add-On Code Runner

--------------------------------------
*/

// constants
const G = 9.81;
// not allowed to change. for example G = 2; ist not allowed

// let is scope-based. Can only be accessed in the scope where it is defined
if (true) {
    var localScope = false;
    let localScopeLet = false;
    localScopeLet = true;
    console.log(localScopeLet);
}
console.log(localScope);
// console.log(localScopeLet); won't run

// variable
var number = 5;
var decimal = 5.10;
var boolean = false;
var string = "TEXT";

// change variables 
number = 7;

// operators
// Assignment: =
// Arithmetic: + - * / % (+= -=)
var remainder =  12 % number;
number += 1;

string += "_FULL"
// Comparison: == != > >= < >=
var compared = 5 == 5.0
// Logical: || && !

// ternary operator
//condition? true : false

let ternary = true ? 1:0;
console.log(`ternary = ${ternary}`);


// print
console.log("HI WORLD");
console.log(number);
console.log(decimal);
console.log(boolean);
console.log(string.toLowerCase());
console.log(G);
console.log(remainder);
console.log(compared);
// string interpolation `` (backticks + ${})
let message = `number ${number}`;
console.log(message);