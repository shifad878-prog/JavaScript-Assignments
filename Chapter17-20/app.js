// Question 1 & 2
let multiArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

console.log(multiArray);


// Question 3
for(let i =  1; i <=10; i++){
    console.log(i);
}

// Question 4
let Number = +prompt("Enter the number for multiplication of table:");
let length = +prompt("Enter the length of the table:");

console.log(`Multiplication table of ${Number}: length 15 `);

for(let i = 1; i <=length; i++){
    console.log(`${Number} x ${i} = ${Number * i}`);
}

// Question 5
let fruits = ["Apple", "Mango", "Banana", "Orange"];

for(let i = 0; i < fruits.length; i++){
    console.log(`index ${i}: ${fruits[i]}`);
}

// Question 6
// a)
for(let i = 1; i <=15; i++){
    console.log(i);
}

// b)
for(let i = 10; i >=1; i--){
    console.log(i);
}

// c)
for(let i = 0; i <=20; i = i + 2){
    console.log(i);
}

// d)
for(let i = 1; i <=19; i = i + 2){
    console.log(i);
}

// e)
for(let i = 2 ; i <= 20; i = i + 2){
    console.log(i + "k, ");
}


// Question 7
let Bakery = ["cake", "cookie", "chips", "patties"]; 
 
let wish = prompt("apko kia chahiy");

for(let i = 0; i < Bakery.length; i++){
    if(Bakery[i] == wish){
        alert("Yes Available ha");
        console.log(i);
    }
    else{
        alert("Not Available");
    }
}

// Question 8
let number = [24, 53, 78, 91, 12];
let largest = number[0];

for(let i = 1; i < number.length; i++){
    if(number[i] > largest){
        largest = number[i]
    }
}
console.log("The largest num is: ", largest);

// Question 9
let numbers = [24, 53, 78, 91, 12];
let smallest = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
}
console.log("The smallest number is: ", smallest);




// Question 10
for(let i = 5; i <=100; i = i  + 5){
    console.log(i);
}
