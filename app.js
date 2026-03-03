// console.log("Hello, World!");
// console.log("This is a simple JavaScript file.");

// var name = "Devon"; // function - scoped, hoisted - avoid in modern JS
// let age = 17; // Block - scoped, can be reassigned
// const PI = 3.14; // Block - scoped, cannot be reassigned

// let score = 0;
// score = 10; // Ok - reassignment allowed for let

// const MAX = 100;
// //Max = 200; wont work because its a const variable // TypeError; assignment to constant variable.

// let homeAddress = "5 Kingi Place, Richmond"; //camelCase
// let userAge = 32;
// console.log(typeof userAge);

// console.log(2 ** 3);
// console.log(5 === 5);

// console.log(5 === "5");
// console.log(5 == "5");

// console.log(5 !== 5);
// console.log(5 <= 5);

// let bool1 = false;
// let bool2 = false;

// if (!bool1 || bool2) {
//     console.log("At least one is true");
// }

const msg = "Hello, Javascript!";

console.log(`The length of msg is = ${msg.length}`);

console.log(msg.toUpperCase());
console.log(msg.replace("Hello", "Hi"));

msg.length; // 18
msg.toUpperCase(); // "HELLO, JAVASCRIPT!"
msg.toLowerCase(); // "hello, javascript!"
msg.includes("Java"); // true
msg.startsWith("He"); // true
msg.indexOf("Java"); // 7
msg.slice(7, 17); // "Javascript"
msg.replace("Hello", "Hi"); // "Hi, Javascript!"
msg.split(","); // ["Hello", " Javascript!"]
" hi ".trim(); // "hi"

// Strings are zero indexed: "Hello"[0] === "H", "Hello"[4] === "o", etc.

const name = "Devon";
const age = 25;

// Old way - concatanation (error prone)
const msg1 = "Hello, " + name + "! You are " + age + " years old.";

//New way - template literals (clean and readable
const msg2 = `Hello, ${name}! You are ${age} years old.`;

// //Multi line strings
// const html =
//     <div class="card">
//         <h2>${name}</h2>
//         <p>Age: ${age}</p>
//     </div>
// ;

// // Any expression works inside ${}
// const total = `Price: ${(12.99 * 3).toFixed(2)}`; // "Price: 38.97"

console.log(`Hello my name is ${name} im ${age} years old`); // This will not work as expected - it will print the literal string with ${name} and ${age}:

let fullName = "Devon Robinson";

fullName = "Jack Smith";

// if / else if / else
const score = 75;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("Below C");
}

// switch - great for exact matches
const day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Midweek");
}