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

let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote";
console.log(voting);