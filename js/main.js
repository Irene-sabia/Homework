"use strict";

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
alert("Hola mi amigo");

let userAge = prompt("How old are you?");
if (userAge >= 60 && userAge <= 110) {
  alert(`You are elderly!`);
} else if (userAge >= 18 && userAge <= 59) {
  alert(`You are adult!`);
} else if (userAge >= 12 && userAge <= 18) {
  alert(`You are teenager!`);
} else if (userAge > 0 && userAge <= 11) {
  alert(`You are child!`);
} else {
  alert(`You entered the wrong age!`);
}
console.log(userAge);

//2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let userNumb = prompt("Enter the number 0 to 9:");

switch (userNumb) {
  case `0`:
    alert(`0 )`);
    break;
  case `1`:
    alert(`1 !`);
    break;
  case `2`:
    alert(`2 @`);
    break;
  case `3`:
    alert(`3 #`);
    break;
  case `4`:
    alert(`4 $`);
    break;
  case `5`:
    alert(`5 %`);
    break;
  case `6`:
    alert(`6 ^`);
    break;
  case `7`:
    alert(`7 &`);
    break;
  case `8`:
    alert(`8 *`);
    break;
  case `9`:
    alert(`9 (`);
    break;
  default:
    alert(`Enter the number 0 to 9:`);
}

console.log(userNumb);

// 3. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let number = prompt("Enter five digit number:");

if (number.length !== 5) {
  alert("Please enter exactly five digits!");
} else if (number === number.split("").reverse().join("")) {
  //.split('') → розбиває рядок на масив символів.  .reverse() → перевертає порядок елементів.  .join('') → з’єднує назад у рядок.
  alert("This number is a palindrome!");
} else {
  alert("This number is not a palindrome.");
}

console.log(number);

// 4. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//від 200 до 300 - знижка буде 3%;
//від 300 до 500 - 5%;
//від 500 і вище - 7%.

let sum = +prompt("Enter the purchase amount:");

if (sum >= 500) {
  alert(`Final amount: ${(sum * (1 - 0.07)).toFixed(2)}`);
} else if (sum >= 300) {
  alert(`Final amount: ${(sum * (1 - 0.05)).toFixed(2)}`);
} else if (sum >= 200) {
  alert(`Final amount: ${(sum * (1 - 0.03)).toFixed(2)}`);
} else {
  alert("No discount for this amount.");
}

console.log(sum);
