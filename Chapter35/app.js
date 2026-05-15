// Question 1 
function showDateTime(){
    let currentDateTime = new Date();
    document.write(currentDateTime);
}
showDateTime();

// Question 2
function fullName(){
    let firstName = "Shifa";
    let lastName = "Danish";
    console.log(firstName + " " + lastName);
}

fullName();


// Question 3
function add(num1 , num2){
    return num1 + num2;
}
    let firstNumber = +prompt("Enter a num1");
    let lastNumber = +prompt("Enter a num2");
    let sum = add(firstNumber, lastNumber);

    console.log("Sum is " + sum);

// Question 4
function calculator(value1 , value2, operator){
    
  if(operator === "+"){
    return value1 + value2;
  }
  else if(operator === "-"){
    return value1 - value2;
  }
  else if(operator === "*"){
    return value1 * value2;
  }
  else if(operator === "/"){
    return value1 / value2;
  }
  else if(operator === "%"){
    return value1 % value2;
  }
  else{
    return "invalid operator"
  }
}

// user input
let val1 = +prompt("Enter a value 1:");
let val2 = +prompt("Enter a value 2:");
let op = prompt("Enter operator (+, -, *, /, %):");

// function call
let result = calculator(val1 , val2 , op);
// out put
console.log(result);


// Question 5
function square(num){
    console.log("Square of " + (num * num));
}
square(4);
square(7);
square(5);

// Question 6
function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
    result = result * i;
    }
    return result;
}
console.log(factorial(4));
document.write("<br/>")

// Question 7
function firstLastNum(){
    let number1 = +prompt("Enter a number1");
    let number2 = +prompt("Enter a number2");

    for(let i = number1; i <=number2; i++){
    document.write(i + "<br>")
    console.log(i);
    }
}
firstLastNum();

// Question 8
// outer function 
function calculateHypotenuse(base , perpendicular){
//inner  function
function calculateSquare(num){
    return num * num;
} 
// base square
let baseSquare = calculateSquare(base);

// perpendicular square
let perpendicularSquare = calculateSquare(perpendicular);

// hypoetnous square
let sum = baseSquare + perpendicularSquare;

//final hypotenous
let finalResult = Math.sqrt(sum);
return finalResult;
}
// function call 

console.log(calculateHypotenuse(3 , 4));

// Question 9
function calculateArea(height , width){
    return height * width;
}
console.log(calculateArea(3 , 5));

// Arrow Function 

// Question 1 
let addNumbers = (a, b) => a + b;
console.log(addNumbers(7, 7)); 

// Question 2
let evenOrOdd = (num) => {
  if(num % 2 === 0){
    return "Even";
  }
  else{
    return "Odd";
  }
}
console.log(evenOrOdd(6));
console.log(evenOrOdd(7));


// Question 3
let greaterNum = (a,b) => {
  if(a > b){
    return `${a}  is greater number`;
  }
  else{
    return `${b} is greater number` ;
  }
}
console.log(greaterNum(10 , 5)); 

// Question 4
let studentMarks = (marks) => {
  if(marks > 40){
    return "pass";
  }
  else{
    return "Fail";
  }
}
console.log(studentMarks(80));

// Question 5
let checkNum = (integer) => {
  if(integer > 0){
    return "postive integer";
  }
  else if(integer < 0){
    return "Negative integer";
  }
  else{
    return "Invalid";
  }
}
console.log(checkNum(-19));

// Question 6
let  squareNum = (num) => num * num;
console.log(squareNum(8));

// Question 7
let uppercase = (text) => text.toUpperCase();
console.log(uppercase("shifa danish"));

// Question 8
let lowercase = (text) => text.toLowerCase();
console.log(lowercase("StUdent Of CompuTER Science"));

// Question 9
let isEmpty = (str) => str === "";
console.log(isEmpty("")); 

// Question 10
let returnFirstChar = (word) => word.charAt(0);
console.log(returnFirstChar("Shifa"));

// Question 11
let firstElement = (arr) => arr[0];
console.log(firstElement(["Apple", "Mango", "Orange"])); 

// Question 12
let lastElement = (arr) => arr[arr.length - 1];
console.log(lastElement([10, 20, 30, 40]));

// Question 13
let countArray = (arr) => arr.length;
console.log(countArray([2,4,6,8,10]));

// Question 14
let evenArray = [2,4,6,8,10,12,14];

let evenNumbers = evenArray.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Question 15
let oddArray = [1,3,5,7,9,11,13];

let oddNumbers = oddArray.filter((num) => num % 2 != 0);
console.log(oddNumbers);

// Question 16
let largeArray = [2,4,7,10,15,20,25];

let largeNumber = largeArray.filter((num) => num > 10);
console.log(largeNumber);

// Question 17
let largeNum = [2,5,7,9,10];

let arrayReturn = Math.max(...largeNum);
console.log(arrayReturn);

// Question 18
let smallNum = [2,5,7,9,10];

let smallReturn = Math.min(...smallNum);
console.log(smallReturn);

// Question 19
let mixedArray = ["Sara", 30, "Fiza", true, 9];

let strings = mixedArray.filter((item) => typeof item === "string");
console.log(strings);

// Question 20
let integers =  [2,5,7,9,10];

let removeLast = (arr) => arr.pop();
console.log(removeLast(integers));
console.log(integers);

// Question 21
let sumNumbers =  [2,5,7,9,20,10];

let sumArray = (arr) => {
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sumArray(sumNumbers));

// Question 22
let countVowels = (str) => {
  let count = 0;
  let vowels =  "aeiouAEIOU";

  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
    count++
    }
  }
  return count;
}
console.log(countVowels("Javascript Student"));

// Question 23
let removeSpaces = (str) => str.replaceAll(" ", "");
console.log(removeSpaces("Hello Javascript"));

// Question 24
let checkWord = (sentence, word ) => {
    let words = sentence.split(" ");

    for(let i = 0; i < words.length; i++){
      if(words[i] === word){
        return true;
      }
    }
    return false;
};
console.log(checkWord("Hey! I am learning javaScript", "javaScript")); //true
console.log(checkWord("Hey! I am learning javaScript", "python")); //false
  
  
// Question 25
let firstWord = (sentence) => {
  let words = sentence.split(" ");
  return words[0];
}
console.log(firstWord("Hey! I am learning js"));

// Question 26
let lastWord = (sentence) => {
  let word = sentence.split(" ");
  return word[word.length - 1];
}
console.log(lastWord("Hey! I am learning js"));


// Question 27
let reversedString = (str) => {
  let reversed = "";

  for(let i = str.length - 1;  i >=0;  i--){
    reversed = reversed + str[i];
    }
    return reversed;
}
console.log(reversedString("Javascript"));

// Question 28
let isDivisibalBy3 = (num) => num % 3 === 0; 
console.log(isDivisibalBy3(9)); //true
console.log(isDivisibalBy3(10)); //false

// Question 29
let onlyLetters = (str) => {
  for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if(
      !(ch >= "A" && ch <= "Z") && !(ch >= "a" && ch <= "z")
    ){
      return false;
    }
  }
  return true;
}
console.log(onlyLetters("Javscipt"));
console.log(onlyLetters("Javscipt9347"));

// Question 30
let sentenceIntoWords = (sentence) => sentence.split("");
console.log(sentenceIntoWords("I am a student of modern web development"));