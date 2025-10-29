"use strict";

const listLessons = document.getElementsByClassName("lesson-list")[0];
console.log(listLessons);

const newListItem = document.createElement("li");
newListItem.textContent = "React";
newListItem.classList.add(".lesson-list_item");
listLessons.appendChild(newListItem);

const title = document.getElementsByTagName("h2")[0];
//console.log(title);

const newTitle = document.createElement("h2");
newTitle.textContent = "DOM";
title.before(newTitle);

const title_1 = document.getElementsByClassName("text")[0];

const newTitle_1 = document.createElement("h2");
newTitle_1.textContent = "Very Hard";
title_1.before(newTitle_1);

const newText = document.createElement("p");
newText.textContent = "Js is very hard!";
title_1.before(newText);

const currency = document.getElementById("btns-currency");

const newbBtnCurrency = document.createElement("a");
newbBtnCurrency.textContent = "UAN";
newbBtnCurrency.classList.add(".btn");
newbBtnCurrency.id = "btn-uan";
currency.appendChild(newbBtnCurrency);
