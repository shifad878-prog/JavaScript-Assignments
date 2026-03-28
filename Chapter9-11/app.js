// Question 1 

// let city = prompt("enter your city name")
// if(city=="Karachi"){
//     alert(`${city} Welcome to the city of light`)
// }
// else{
//     alert(`Karachi ajao`);
// }

// Question 2 

// let gender = prompt("Enter your gender");

// if(gender == "male"){
//     alert("Good Morning Sir.");
// }
// else{
//     alert("Good Morning Ma’am");
// }


// Question 3

// let color = prompt("Enter a trafiic signal color")

// if(color == "Red"){
//     alert("Must Stop")
// }
// else{
//     if(color == "yellow"){
//         alert("ready to move")
//     }
//     else{
//         alert("Go");
//     }
// }

// Question 4

// let remainingFuel = prompt("Enter remaining fuel in your car (in litres)")
// if(remainingFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Fuel level is sufficient");
// }

// Question 5
// a)
// let a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }
// else{
//     alter("given condition for variable a is false")
// }

// b)

// let b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is false")
// }

// c)

// let c = 12;
// if(c++ === 13){
//     alert("condition 1 is true")
// }
// if(c === 13){
//     alert("condition 2 is true")
// }
// if(++c < 14){
//     alert("condition 3 is true")
// }
// if(++c === 14){
//     alert("condition 4 is true")
// }

// d)

// let materialCost = 20000; 
// let  laborCost = 2000; 
// let  totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals" + totalCost);
// }

// e)

// let 
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }

// f)
if("car" < "cat"){ 
alert("car is smaller than cat"); 
}

// Question 6

let sub1 = +prompt("Enter marks of subject 1");
let sub2 = +prompt("Enter marks of subject 2");
let sub3 = +prompt("Enter marks of subject 3");

let totalMarksn = +prompt("Enter total marks; ");
let obtainedMarks = sub1 + sub2 + sub3;
console.log(obtainedMarks);

let percentage = obtainedMarks / totalMarksn * 100;
// console.log(percentage);

let grade;
let remakrs;

if(percentage >=80){
    grade = "A";
    remakrs = "Good"
}
else if(percentage >=70){
      grade = "B";
      remakrs = "You need to improve"
}
else if(percentage >= 60){
    grade = "C";
    remakrs = "Sorry"
}

document.write("Total marks : 300");
document.write(" <br/> ");
document.write("Marks obtained : 219");
document.write("<br/>");
document.write("percentage : 73%");
document.write("<br/>");
document.write("Grade : B");
document.write("<br/>");
document.write("Remarks : You need to improve");

// Question 7

// let num = 6;
// let guess = +prompt("Guess the secret number");

// if(guess === num){
//     alert("Bingo! Correct answer");
// }
// else if (guess +1 ===num){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("try again");
// }

// Question 8

// let num = +prompt("Enter a number");

// if(num % 3 === 0){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("The number is not divisible by 3");
// }

// Question 9

// let count = +prompt("Enter a number");

// if(count % 2 === 0){
//     alert("The number is even")
// }
// else{
//     alert("The number is odd");
// }

// Question 9

// let temprature = +prompt("Enter the temprature");
//  if(temprature >= 40){
//     alert("it is too hot outside");
//  }
// else if (temprature >= 30){
//     alert("The Weather today is Normal.");
//  }
//  else if (temprature >= 20){
//     alert("Today’s Weather is cool.")
//  }
//  else if (temprature >= 10){
//     alert("OMG! Today’s weather is so Cool")
//  }

// Question 10

let num1 = +prompt("Enter a first number");
let num2 = +prompt("enter a second number");
let operation = prompt("Enter operation ( + , - , * , / , % )")

let result;

if(operation === "+"){
    result = num1 + num2;
}
else if(operation === "-"){
    result = num1 - num2;
}
else if(operation === "*"){
    result = num1 / num2;
}
else if(operation === "%"){
    result = num1;
}
else{
    alert("invalid operation")
}
alert("Result:" + result);