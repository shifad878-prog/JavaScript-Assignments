// Question 1 
let ch = prompt("Enter a character")
let code = ch.charCodeAt(0);
console.log(code);

// Question 2
let num1 = +prompt("Enter a first number");
let num2 = +prompt("Enter a second number");

if(num1 > num2){
    console.log("First number is larger")
}
else if(num1 < num2){
    console.log("Second number is larger")
}
else{
    console.log("Both numbers are equal")
}

// Question 3
let integer = +prompt("Enter a number");

if(integer > 0){
    console.log("This number is positive integer")
}
else if(integer < 0){
    console.log("This number is negative integer")
}
else if(integer == 0){
    console.log("This number is zero")
}
else{
    console.log("This is not valid")
}


// Question 4
let Ch = prompt("Enter a character");
Ch = Ch.toLowerCase();

if(Ch === "a" || Ch === "e" || Ch === "i" || Ch === "o" || Ch === "u"){
    console.log(true);
}
else{
    console.log(false);
}

// Question 5
let correctPassword = "myScecret090";

let userPassword = prompt("Enter your password:");

if(userPassword === "" || userPassword === null){
    console.log("Please Enter tour password");
}
else if(userPassword === correctPassword){
    console.log("Correct! The password you entered matches the original password");
}
else{
    console.log("Incorrect password");
}

// Question 6
var greeting;
var hour = 13;

if(hour < 18){
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

// Question 7
let time = +prompt("Enter time in 24 hour format (1900):");

if(time >=0 && time < 1200){
    console.log("AM");
}
else if(time >=1200 && time <= 2359){
    console.log("PM");
}
else{
    console.log("invalid time");
}