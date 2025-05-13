// // // console.log(200);

// // let myAge = 34;
// // myAge = 65;

// // console.log(myAge);

// // const yourAge = 67;

// // // yourAge = 45;
// // console.log(yourAge);

// // let age;

// // age = 45;
// // console.log(age);

// //Primitive data types

// // string '' ""

// let mary = "today is mary's birthday";

// // number

// let myNum = 63;

// //boolean
// const me = true;
// const you = false;

// //undefined
// let test;
// console.log(test);

// //null
// let test2 = null;

// test2 = 56;
// console.log(test2);

// // Non-primitive data types
// // objects

// const student = {
//   name: "mary",
//   age: 21,
//   isPregnant: true,
// };

// console.log(student);

// // arrays

// const myArray = ["Timilehin", "rere", 354, true, { name: "mary" }, [2, 4, 6]];
// console.log(myArray[2]);

// // functions

//Arithemetic Operator

// let a = 34;
// let b = 56;

// // Addition
// const sum = a + b;
// console.log(sum);

// //Subtraction
// const subb = a - b;
// console.log(subb);

// //Division
// const div = b / a;
// console.log(div);

// //Mutiply
// const mut = a * b;
// console.log(mut);

// //Modulus
// const modul = b % a;
// console.log(modul);

// //Assignment Operators
// let c = 39
// // +=
// // -=

//Comparism Operators
// const d = "jane";
// const e = "jane";
// const f = "mary";
// const g = 23;
// const h = 47;
// const i = 23;
// const j = "23";

//Equals To
// console.log(d == e);
// //Grater Than
// console.log(g > h);
// //Less Than
// console.log(g < h);
// //Greater than equals to
// console.log(g >= i);
// //Less than equals to
// console.log(g <= i);
// //Not Equals To
// console.log(g != i);
//Strictly Equals To
// console.log(i === j);
// console.log(i);
// console.log(j);

//Logical Operator
// Logical OR ||
// Logical NOT !
// Logiacl AND &

// //Ayo's Admission Details
// const fee = true;
// const uniform = false;
// const textbooks = false;
// const idCard = false;

// const checkOR = fee || !textbooks || uniform || idCard;
// const checkAND = fee && textbooks && uniform && idCard;
// const checkAyo = fee && textbooks;
// const checkAyoAgain = (fee && idCard) || (fee && uniform);
// console.log(checkAyoAgain);
// console.log("from idcard", !idCard);

// //Unary Operator
// // Increment ++
// // Decrement --

// let k = 3;
// k++;
// console.log(k);
// k--;
// console.log(k);

// //Tenary Operator
// // (contition) ? "" : ""

// const tenTest = 76 > 45 ? "Yes This is correct" : "No, That is wrong";

// console.log(tenTest);

//Write a program that tells if a user is legible to vote

let age = -65;

// let voting = age < 18 ? "You cannot vote" : "You can vote";
// console.log(voting);

//let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote";
//console.log(voting);

//const userNumber = parseInt(prompt("Enter a number"));

//if (userNumber > 0) {}

//write a program to determine the greater of two numbers

// const userNumber = parseInt(prompt("Enter a number"));
// if (userNumber > 100) {
//     alert(`${userNumber} is greater`);
// }
// else if (userNumber < 100) {
//     alert(`${userNumber} is less`);
// }
// console.log(userNumber);

// const valueOne = parseInt(prompt("Enter your first number"));
// const valueTwo = parseInt(prompt("Enter your second number"));
// if (valueOne > valueTwo) {
//     alert (`${}`)
// }
// write a program that transforms a numerical grade to a letter grade (e.g grade 0-39) should display "F", grade 40 -44 should display "E", grade 45-49 should display "D", grade 50-59 should display "C", grade 60-69 should display "B", grade 70-100 should display "A").

// const myGrade = parseInt(prompt("Enter your grade"));
// if (myGrade >= 0 && myGrade <= 39) {
//     alert(`your grade is F`);
// }
// else if (myGrade >= 40 && myGrade <= 44) {
//     alert(`your grade is E`);
// }
// else if (myGrade >= 45 && myGrade <= 49) {
//     alert(`your grade is D`);
// }
// else if (myGrade >= 50 && myGrade <= 59) {
//     alert(`your grade is C`);
// }
// else if (myGrade >= 60 && myGrade <= 69) {
//     alert(`your grade is B`);
// }
// else if (myGrade >= 70 && myGrade <= 100) {
//     alert(`your grade is A`);
// }
// else {Write a program that calculate the body mass index (BMI) and categories it. The formula for BMI is: weight / (height * height). The categories are: underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 -29.9), and obesity (BMI >= 30).

// const weight = parseInt(prompt("Enter your weight in kg"));
// const height = parseInt(prompt("Enter your height in m"));

//methods and properties
// properties deals with what we See (features)
// methods deals wuth the action perculiar to the datatype

// properties
// methods are properties of an objectthat can be used to perform actions
// array /**
//  * 
//  */
// nameBox.push(johanna) {
    
// let studentData = {
//     name: 'mary',
//     score: 100,
// }

// String methods
// let myStr = "Hello, Javascript World!";

// let myName = "Nubi Mary";

// console.log(myStr);
// console.log(myStr.toUpperCase());
// console.log(myStr.toLowerCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("Javascript"));
// console.log(myStr.includes("Hi"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2, 8));
// console.log(myStr.trim());
// console.log(myStr.replace("World", "Universe"));
// console.log(myStr.replace("o", "t"));
// console.log(myStr.split(" "));
// console.log(myStr.split(" ")[1]);;
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("Hi"));
// console.log(myName + myStr);


// // Number Methods
// let num = 42.678;
// let strNum = "89.56";

// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed(1));
// console.log(parseInt(strNum));
// console.log(parseFloat(strNum));
// console.log(isNaN("trtr"));

// // Math Methods

// console.log(Math.PI);
// console.log(Math.round(41.673));
// console.log(Math.floor(42.9));
// console.log(Math.ceil(42.1));
// console.log(Math.max(12, 6, 7));
// console.log(Math.min(34, 5, 7));
// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(144));
// console.log(Math.random());
// console.log(Math.random()* 1000);

// console.log(Math.floor(Math.random()* 1000));

// // Objects

// let Student = {
//     name: "Shade",
//     age: 24,
//     email: "mary@gmail.com",
// };

// console.log(Student);
// console.log(Student.name);
// console.log(Object.keys(Student));
// console.log(Object.values(Student));


// // Functions
// function myName(name) {
//     console.log(name);
// }

// myName("Joy");
// myName("Mary");
// myName("Sodiq");

// function addNum (a, b) {
//     console.log(a + b);
// }
//     addNum(16, 34);
//     addNum(23, 45);





