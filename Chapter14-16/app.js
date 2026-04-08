// Question 1 
let studentNames = [];

studentNames.unshift("Huma");
studentNames.push("Ali");
console.log(studentNames)

// Question 2
let student_Names = new Array();

student_Names.push("Sara")
student_Names.push("Zara")
console.log(student_Names);

// Question 3
let Fruits = ["Apple", "Mango", "Orange", "Grapes"];
console.log(Fruits);

// Question 4
let numbers = [1,3,5,7,9]
console.log(numbers);

// Question 5
let isPassed = [true, false, true, false];
console.log(isPassed)

// Question 6
let Arrays = ["Ali", 70, true];
console.log(Arrays);

// Question 7
let qualifications = ["SSc", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phill", "PhD"];

document.write("<h3>Quailifications:</h3>")
document.write("<ol>");
for(let i = 0; i < qualifications.length; i++){
    document.write(`<li> ${qualifications[i]}</li>`)
}
document.write("</ol>");

// Question 8
let tulbaNames = ["Michael", "John", "Tony"];
let tulbaMarks = [320, 230, 480];
let totalMarks = 500;

for(let i = 0; i < tulbaNames.length; i++){
    let percentage = tulbaMarks[i]/totalMarks * 100;
    console.log(`score of ${tulbaNames[i]} is ${tulbaMarks[i]}. percentage: ${percentage}%`);
}

// Question 9
let colors = ["Red", "Blue", "Orange", "Black", "White"]
document.write("<h3>Colors:</h3>")
document.write("<ul>")
for(let i = 0; i < colors.length; i++){
    document.write(`<li> ${colors[i]} </li>`);
}
document.write("</ul>");

// a)
let vegetables = ["Peas", "carrot", "spanich", "potato", "tomato"];

let userInput1 = prompt("which vegetable do you want to add at the begining?");
vegetables.unshift(userInput1);

// b)
let userInput2 = prompt("which vegetable do you want to add at the ending");
vegetables.push(userInput2)

// c)
vegetables.unshift("Onion", "quali-flower")

// d)
vegetables.shift();

// e)
vegetables.pop();

// f)
let index1 = +prompt("At which index do you want to add the vegetable")
let userInput3 = prompt("which vegetable do you want to add");
vegetables.splice(index1, 0, userInput3);

// g)
let index2 = +prompt("At which index do you want to delt the vegetables")
let userInput4 = +prompt("How many vegetables do you want to delt");
vegetables.splice(index2, userInput4);


console.log(vegetables);


// Question 10
let scores = [320, 230, 480, 120];

scores.sort((a , b) => a - b);
console.log(scores);

// Question 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(0,3)

console.log(selectedCities);


// Question 12
let arr = ["This ", "is ", "my ", "Cat "];
let result = arr.join("");

console.log(result);

// Question 13
let devices = [];

devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
console.log("initial:", devices);

devices.pop("");
devices.pop("");
devices.pop("");

console.log(devices);

// Question 14
let queue = [];

queue.push("Ali");
queue.push("Sara");
queue.push("Ahmed");

console.log("Initial:" , queue);

queue.shift();
queue.shift();
queue.shift();

console.log(queue);

// Question 15
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<seclect>");

for(let i = 0; i < manufacturers.length; i++){
    document.write(`<option>${manufacturers[i]}</option>`);
}
document.write("</select>");