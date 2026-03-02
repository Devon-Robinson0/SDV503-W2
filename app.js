console.log("Hello, World!");
console.log("This is a simple JavaScript file.");

var name = "Devon"; // function - scoped, hoisted - avoid in modern JS
let age = 17; // Block - scoped, can be reassigned
const PI = 3.14; // Block - scoped, cannot be reassigned

let score = 0;
score = 10; // Ok - reassignment allowed for let

const MAX = 100;
//Max = 200; wont work because its a const variable // TypeError; assignment to constant variable.

let homeAddress = "5 Kingi Place, Richmond"; //camelCase
let userAge = 32;
console.log(typeof userAge);

console.log(2 ** 3);
console.log(5 === 5);

console.log(5 === "5");
console.log(5 == "5");

console.log(5 !== 5);
console.log(5 <= 5);

let bool1 = false;
let bool2 = false;

if (!bool1 || bool2) {
    console.log("At least one is true");
}
