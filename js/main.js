"use strict";

// 1. Напиши всі можливі варіанти створення функцій.
// 1) Function Declaration --------------------

sayHelloMessage();

function sayHelloMessage() {
  let textMessage = `Hello my favorite students!`;

  alert(textMessage);
}

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
let sum = function () {
  let result = 0;
  for (let numb of arguments) {
    result += numb;
  }
  return result;
};

// console.log(sum(3,5,7));

// 3. Напиши функцію, яка приймає 2 числа і повертає :
//-1, якщо перше число менше, ніж друге;
//1 - якщо перше число більше, ніж друге;
//0 - якщо числа рівні.

function numberEquality() {
  let numb = prompt(`Введи перше число: `);
  let numb_2 = prompt(`Введи друге число: `);

  if (numb < numb_2) {
    alert(`-1`);
  } else if (numb > numb_2) {
    alert(`1`);
  } else {
    alert(`0`);
  }
}

numberEquality();

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

let number = +prompt("Введи число:");
alert(`Факторіал числа ${number} = ${factorial(number)}`);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function makeNumber(number_1, number_2, number_3) {
  return Number(
    number_1.toString() + number_2.toString() + number_3.toString()
  );
}

let number_1 = +prompt("Введи першу цифру:");
let number_2 = +prompt("Введи другу цифру:");
let number_3 = +prompt("Введи третю цифру:");

alert(`Отримане число: ${makeNumber(number_1, number_2, number_3)}`);

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function getArea(length, width) {
  if (width === undefined) {
    return length * length;
  } else {
    return length * width;
  }
}

let length = +prompt("Введи довжину:");
let width = +prompt("Введи ширину (або залиш порожнім для квадрата):");
alert(`Площа фігури: ${getArea(length, width)}`);
