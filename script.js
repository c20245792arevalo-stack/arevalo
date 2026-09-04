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

const heading = document.querySelector("h1");
heading.textContent = "Melvin Arevalo";
heading.style.color = "purple";
heading.style.fontSize = "100px";
heading.style.backgroundColor = "yellow";
console.log(heading);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading clicked.");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector('#switch');
const body = document.querySelector("body");
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;
    
    if(isOff){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
