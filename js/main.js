'use strict';

// Примитиви -за значенням
// складні - за посиланням

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let numb = 0.1;
let numb_2 = 0.2;
let sum = numb + numb_2;

console.log(sum.toFixed(1));

//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let str = '1';
let numb_3 = 2;

//console.log(+str + numb_3);
console.log(Number(str) + numb_3);

//3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку. 
alert('Hola mi amigo');

let memoryUSB = prompt('Enter memory of USB:');
let countOfFile = memoryUSB / 0.820;
let remainMemory = memoryUSB % 0.820
console.log(Math.floor(countOfFile)); // огрилити до цілого числа в меньшу сторону
console.log(remainMemory.toFixed(3));

alert(`You can save ${Math.floor(countOfFile)} files and remain ${remainMemory.toFixed(3)} mb`);


//4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let moneySum = prompt('Enter sum of money:');
let priceOfChoco = prompt('Enter price of chocolate:');
let numbOfChoco = moneySum / priceOfChoco;
let remainMoney = moneySum % priceOfChoco;

console.log(Math.floor(numbOfChoco));
console.log(remainMoney.toFixed(2));

alert(`You can buy ${Math.floor(numbOfChoco)} chocolate and remain ${remainMoney.toFixed(2)} grn`);

//5. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let numb_4 = prompt('Enter number of threes:');
let last = numb_4 % 10;               
let middle = Math.floor((numb_4 / 10) % 10); //
let first = Math.floor(numb_4 / 100);  

let reversed = last * 100 + middle * 10 + first;
console.log(reversed);


alert(`Your number is backwards: ${reversed}`);

//6. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let sumOfInvest = prompt('Enter investment amount:');
const RATE = 5; 
const MOUNTHS = 2;

let interest = sumOfInvest * (RATE / 100) * (MOUNTHS / 12);
console.log(interest.toFixed(2));

alert(`Sum of interest calculated: ${interest.toFixed(2)} grn`);

//7. Що повернуть вирази:
let log = 2 && 0 && 3; //0
console.log(log);

let log_2 = 2 || 0 || 3; //2
console.log(log_2);

let log_3 = 2 && 0 || 3; //3
console.log(log_3);

let finishExirs = 0 - Boolean('false') + (Number(Boolean(' ')) + 5) * 100 / 50 + Boolean(0); // 10
console.log(finishExirs);

