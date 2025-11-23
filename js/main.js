"use strict";

/* 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти: */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) `Радіус не може буди відʼємним`;
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  getSquare() {
    return (Math.PI * this._radius ** 2).toFixed(2);
  }

  getlenth() {
    return (2 * Math.PI * this._radius).toFixed(2);
  }
}

let circle = new Circle(3);
console.log(circle);

console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.getSquare());
console.log(circle.getlenth());

/* circle.radius = 17;
console.log(circle.diameter);
console.log(circle.getSquare()); */

/* Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти */

class Marker {
  constructor(color, amountInk) {
    this.color = color;
    this.amountInk = amountInk;
  }

  write(text) {
    let result = "";
    for (let str of text) {
      if (str !== " " && this.amountInk <= 0) break;
      result += str;
      if (str !== " ") this.amountInk -= 0.5;
    }
    console.log(`%c${result}`, `color: ${this.color}`);
    console.log(`Залишок чорнила: ${this.amountInk}%`);
  }
}

const yellowMarker = new Marker("yellow", 10);
yellowMarker.write("Привіт, як справи?");

/* Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml (). */

class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = `
        <table border="1" cellpadding="6" style="border-collapse: collapse;">
          <tr>
            <th>Ім'я</th>
            <th>Вік</th>
            <th>Посада</th>
            <th>Зарплата</th>
          </tr>
      `;

    for (let emp of this.employees) {
      html += `
          <tr>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.position}</td>
            <td>${emp.salary}</td>
          </tr>
        `;
    }

    html += `</table>`;
    return html;
  }
}

const employees = [
  new Employee("Олена", 24, "Касир", 15000),
  new Employee("Ігор", 40, "Кредитний менеджер", 22000),
  new Employee("Марія", 45, "Бухгалтер", 25000),
  new Employee("Андрій", 23, "Охоронець", 12000),
];

const table = new EmpTable(employees);

document.getElementById("table-container").innerHTML = table.getHtml();
