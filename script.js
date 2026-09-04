console.log("Hello World.");
console.log("From script.js file.");

const myName = "Wency";
let age = 21;
let myNumber = 997717381;
let myAddress = "Ditching Subd, Brgy V.";


console.log(`Name: ${myName}`);
console.log(`Age:${age}`);
console.log(`Number: ${myNumber} `);
console.log(`Address: ${myAddress}`);
console.log(`${67}`);

function greet(greetings, names = []) {
    return `${greetings} sa emu, ${names}`;
}
console.log(greet("Maayong aga", ["Wency", "Bai", "Soy", "Tol", "Erp"]));



