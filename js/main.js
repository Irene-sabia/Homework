"use strict";

let arrFoods = [
  {
    name: "bread",
    amount: 2,
    isBought: false,
    price: 15,
  },
  {
    name: "milk",
    amount: 3,
    isBought: true,
    price: 38,
  },
  {
    name: "beer",
    amount: 2,
    isBought: false,
    price: 40,
  },
];

arrFoods.forEach((item) => {
  item.total = item.amount * item.price;
});

console.log(arrFoods);

function displayFoods() {
  for (let item of arrFoods) {
    if (!item.isBought) {
      console.log(`${item.name} — Не куплено`);
    }
  }

  for (let item of arrFoods) {
    if (item.isBought) {
      console.log(`${item.name} — Куплено`);
    }
  }
}

//displayFoods();

function buyProduct(productName) {
  for (let item of arrFoods) {
    if (item.name.toLowerCase() === productName.toLowerCase()) {
      item.isBought = true;
      console.log(`${item.name} вже у корзині`);
      return;
    }
  }

  console.log(`Продукт "${productName}" не знайдено`);
}

//buyProduct("milk");
//buyProduct("beer");
//buyProduct("apple");

function removeFood(productName) {
  const newArrFoods = arrFoods.filter(
    (item) => item.name.toLowerCase() !== productName.toLowerCase()
  );

  if (newArrFoods.length === arrFoods.length) {
    console.log(`Продукт "${productName}" не знайдено`);
  } else {
    arrFoods = newArrFoods;
    console.log(`"${productName}" видалено`);
  }
  //filter() повертає новий масив з елементами, які пройшли умову
}

//removeFood("milk");
//console.log(arrFoods);

function addFood(name, amount, price) {
  const product = arrFoods.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (product) {
    product.amount += amount;
    product.sum = product.amount * product.price;
    console.log(`${name}: кількість ${product.amount}, сума = ${product.sum}`);
  } else {
    arrFoods.push({
      name: name,
      amount: amount,
      isBought: false,
      price: price,
      sum: price * amount,
    });
    console.log(`${name} додано`);
  }
}

addFood("milk", 2);
console.log(arrFoods);
addFood("eggs", 10, 6.2);
console.log(arrFoods);
