'use strict';

let firstName = 'Ірина';
let lastName = 'Балак';
let user_name = 'Iryna Balak';
let fullname1 = `${firstName} ${lastName}`;

//let _fullName;
/* let 1Name;
let first.name;
let full-name;
 */

console.log(firstName, lastName);
console.log(user_name);
console.log(fullname1);

let userName = prompt('What is your name?'); 
alert(`Привіт, ${userName}!`);

let userBirthYear = prompt('Enter your birthYear', '');
const currentYear = new Date().getFullYear();
let userAge = currentYear - userBirthYear;

alert(`You are ${userAge} years`);

let squareWidth = prompt('Enter width square', '');

let areaSquare = squareWidth * squareWidth;
alert(`Area of square = ${areaSquare} sm\u00B2`);

let radius = prompt('Enter circle radius', '');

const Pi = Math.PI;
let areaCircle = Pi * radius * radius;
alert(`Area of the circle = ${areaCircle.toFixed(2)}`);


let distance = prompt('Enter distance in kilometers between two cities', '');
let hours = prompt('Enter how many hours you want to get there', '');
let speed = distance / hours;
alert(`you have to move with speed ${speed} km/h`);


let dollars = prompt("Enter sum in dollars:");

const USD_TO_EUR = 0.93;
let euros = dollars * USD_TO_EUR;

alert(`${dollars} USD = ${euros.toFixed(2)} EUR`);