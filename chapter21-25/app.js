// Question 1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLocaleLowerCase();
lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLocaleLowerCase();
var fullName = firstName + " " + lastName;


console.log("Hey!" + fullName);

// Question 2
let userInput = prompt("Enter your favrt mobile phone model");

document.write("My favrt phone is: " + userInput);
document.write("<br/>");
document.write("length of string " + userInput.length);
document.write("<br/>");

// Question 3
let word = "pakistani";

document.write("string " + word);
document.write("<br/>");
document.write("index of " + word.indexOf("n"));
document.write("<br/>");

// Question 4
let world = "Hello world";

document.write("string " + world);
document.write("<br/>");
document.write("last index of " + world.lastIndexOf("l"));
document.write("<br/>");

// Question 5
let country = "pakistan";

document.write("string " + country);
document.write("<br/>");
document.write("character at index 3" + country.charAt(3));
document.write("<br/>");

// Question 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLocaleLowerCase();
lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLocaleLowerCase();
var fullName = firstName.concat  (" " , lastName);

console.log("Hey!" + fullName);

// Question 7
let city = "Hydrabad";

document.write("word " + city);
document.write("<br/>");
document.write("After replacement " + city.replace("Hydrabad" , "Islamabad"));
document.write("<br/>");

// Question 8
let message = "Ali and Sami are best friends. They play cricket and football together.";

document.write("messsage" + message);
document.write("<br/>");
document.write("After replacement " + message.replaceAll("and" , "&"));
document.write("<br/>");

// Question 9
let string = "427";
let num = 427;

document.write("value " + string + "<br/>");
document.write("type: " + typeof string + "<br/>");
document.write("value " + num + "<br/>");
document.write("type: " + typeof num + "<br/>");


// Question 10
let capital = "peanuts";

capital = capital.toUpperCase();
console.log(capital);
document.write(capital + "<br/>");

// Question 11
let title = prompt("Enter your title");

title = title.slice(0,1).toUpperCase() + title.slice(1).toLowerCase();
console.log(title);

// Question 12
let number = 35.36;
let str = number.toString() .replace("." , "");

document.write("Number: " + 35.36  + "<br/>");
document.write("Result: " + str + "<br/>");


// Question 13
let userName = prompt("Enter username");

let isValid = true;

for(let i = 0; i < userName.length; i++){
if(userName[i]=== "@" || userName[i]=== "." || userName[i]=== "!" || userName[i]=== ","){
    isValid = false;
 }
}
if(isValid === true){
    alert("valid user name")
}
else{
    alert("please enter your valid user name")
}


// Question 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userOrder = prompt("Welcome to SMIT bakery! what do you want to order Sir/Ma'am?");

userOrder = userOrder.toLowerCase();

let flag = false;
for(let i = 0; i < A.length; i++){
    if(A[i]=== userOrder) {
        flag = true;
    }
}
if(flag === true){
    alert(userOrder + " is available in our bakery");
} else {
    alert(userOrder + " is not available our bakery");
}
document.write("We are sorry. " +  userOrder +  " is not available in our bakery" + "<br/>");

// Question 15
let userPassword = prompt("Enter a passsword");

let hasLetter = false;
let hasNumber = false;

for(let i = 0; i < userPassword.length; i++){
    let ch = userPassword[i];
    if((ch >= "a" && ch <= "z" ) ||  (ch >= "A" && ch <= "Z" )){
        hasLetter = true;
    } 
    if(ch >= "0" && ch <= "9" ){
        hasNumber = true;
    }
}

if(hasLetter && hasNumber){
    alert("Valid Password")
}
else{
    alert("Invalid Password (must contain letters and numbers)");
}


// Question 16
let university = "University of karachi";
let arr = university.split("")

for(let i = 0; i < arr.length; i++){
   document.write(arr[i] + "<br/>");
}

// Question 17
let input = prompt("Enter your country");

let lastChar = input[input.length - 1];
document.write(lastChar);
document.write("<br/>");


// Question 18
let text = "The quick brown fox jumps over the lazy dog.";

// conver into array 
let words = text.split(" ");
// console.log(words); 

let count = 0
for(let i = 0; i < words.length; i++){
    if(words[i].toLowerCase() === "the"){
    count++;
    }
}
console.log(count);
document.write("Text: " + text);
document.write("<br/>");
document.write("There are 2 occurrences(s) of worrd 'the' ");