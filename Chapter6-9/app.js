// Question 1 

let num = 20;
let result = num / 2;
console.log(result);

document.write("The value of variable " + result);

document.write(" <br/>" )
document.write(" <br/>" )

let a = 10;
++a;

console.log(a);
document.write("The value of ++a is: " + a);
document.write(" <br/>" )
document.write("Now the value of a is: " + a);

document.write(" <br/>" )
document.write(" <br/>" )

let b = 11;
b++;

console.log(b);
document.write("The value of b++ is: " + b);
document.write(" <br/>" )
document.write("Noe the value of b++ is : " + b);
document.write(" <br/>" )
document.write(" <br/>" )

let c = 12;
--c;
console.log(c);
document.write("The value of --c is " + c);
document.write(" <br/>" )
document.write("Now the value c is: " + c);
document.write(" <br/>" )
document.write(" <br/>" )

let d = 11;
d--;
console.log(d);
document.write("The value of d-- is: " + d);
document.write(" <br/>" )
document.write("Now the value d is: " + d);
document.write(" <br/>" )
document.write(" <br/>" )

// Question 2

let x = 2;
let y = 1;

let stage1 = --x;
console.log(stage1);
document.write("stage1 is = " + stage1);
document.write(" <br/>" )

let m = 1;
let n = 1;

let stage2 = --m - --n;
console.log(stage2);
document.write("stage2 is = " + stage2);
document.write(" <br/>" )

let u = 1;
let v = 0;

let stage3 = --u - --v + ++v;
console.log(stage3);
document.write("stage3 is = " + stage3);
document.write(" <br/>" )

let p = 2;
let q = 1;

let stage4 = --p - --q + ++q + q--;
console.log(stage4);
document.write("stage4 is = " + stage4);
document.write(" <br/> ")

// Question 3 

let userName = prompt("Enter Your Username");

document.write("My name is " + userName + "<br/>");
document.write(" <br/> ")

// Question 4

// let Table = prompt("Enter a number");
// let count = 1;
// let tableNum = 5;

// document.write("Table of 5" + "<br/>");

// document.write(`${tableNum} x ${count} = ${tableNum}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// count++;
// document.write(" <br/> ")
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")
// count++;
// document.write(`${tableNum} x ${count} = ${tableNum * count}`);
// document.write(" <br/> ")

// OR 

let userInput = prompt("Enter a number");
let tableNum;
let count = 1

if(userInput === "" || userInput === null){
    tableNum = 5;
}
else{
    tableNum = Number(userInput);
}

document.write("Multiplication table of ${tableNum} <br/> ");

document.write(`${tableNum} x 1 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 2 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 3 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 4 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 5 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 6 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 7 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 8 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 9 = ${tableNum * count}`);
document.write(" <br/> ")
count++
document.write(`${tableNum} x 10 = ${tableNum * count}`);
document.write(" <br/> ")



// Question 5
// a)
let sub1 = prompt("Enter your first subject name");
let sub2 = prompt("Enter your second subject name");
let sub3 = prompt("Enter your third subject name");

// b)
let totalMarksEachSubject = 100;

// c)
let marks1 = Number(prompt("Enter obtained marks for " + sub1));
let marks2 = Number(prompt("Enter obtained marks for " + sub2));
let marks3 = Number(prompt("Enter obtained marks for " + sub3));

// d)
let totalMarks = totalMarksPerSub * 3;
let obtainedTotal = marks1 + marks2 + marks3;
let percentage = obtainedTotal / totalMarks * 100;

document.write("<table border='1'>");

// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub1 + "</td>");
// document.write("<td>" + totalMarksPerSub + "</td>");
// document.write("<td>" + marks1 + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub2 + "</td>");
// document.write("<td>" + totalMarksPerSub + "</td>");
// document.write("<td>" + marks2 + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub3 + "</td>");
// document.write("<td>" + totalMarksPerSub + "</td>");
// document.write("<td>" + marks3 + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td></td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedTotal + "</td>");
// document.write("</tr>");

// document.write("</table>");

// document.write("<br>Percentage: " + percentage + "%");

