//! What is DOM ?
// DOM stands for Document Object Model. It is a visual representation of HTML structure in a tree like format

//! DOM Selectors
//--> There are 5 types

// //! 1) document.getElementById()
// let h1tag = document.getElementById("head1");
// console.log(h1tag);

// //! 2) document.getElementsByClassName()
// let collection1 = document.getElementsByClassName("head2");
// console.log(collection1); // HTMLCollection(3) [h2.head2, h3.head2, h4.head2]

// //! 3) document.getElementsByTagName()
// let collection2 = document.getElementsByTagName("div");
// console.log(collection2); //HTMLCollection(3) [div, div, div]

// //! 4) document.querySelector("#head1, .head2, div")
// let ele = document.querySelector(".head2, div, #head1");
// console.log(ele);

// //! 5) document.querySelectorAll("#head1, .head2, div")
// let lists = document.querySelectorAll("div , .head2, #head1");
// console.log(lists); // NodeList(7) [h1#head1, h2.head2, h3.head2, h4.head2, div, div, div]

//! DIFFERNCE BETWEEN HTMLCollection AND NodeList

//! DIFFERENCE 1
// const collection = document.getElementsByTagName("div");
// const lists = document.querySelectorAll("div");

// console.log(collection);
// console.log(lists);

// // Array.isArray() check array pure or not, returns boolean
// console.log(Array.isArray(collection)); // false
// console.log(Array.isArray(lists)); // false

// // NOTE: we can use forEach in NodeList
// lists.forEach((ele) => {
//   console.log(ele);
// });

// // Array.from() it converts impure array to pure array and returns it

// let pureCollection = Array.from(collection);
// let pureLists = Array.from(lists);

// console.log(pureCollection);
// console.log(pureLists);

// console.log(Array.isArray(pureCollection)); //true
// console.log(Array.isArray(pureLists)); //true

//! DIFFERENCE 2
// const collection = document.getElementsByTagName("div");
// const list = document.querySelectorAll("div");

// console.log("collection", collection.length); // 3
// console.log("list", list.length); // 3

// for (let i = 0; i < 5; i++) {
//   const divTag = document.createElement("div");
//   divTag.textContent = "I am Div" + " " + i;
//   document.body.appendChild(divTag);
// }

// console.log("collection", collection.length); // 8 --> Live Collection
// console.log("list", list.length); // 3 --> Static Collection

//! EVENTS : action performed by the user

// 1) event attributes : onclick, ondblclick, onmouseenter, onmouseleave, onmousemove, onkeydown, onkeyup, onload, onscroll, onchange, onsubmit

function singleclick() {
  console.log("btn clicked once");
}

function doubleclick() {
  console.log("btn clicked twice");
}

function keyPressed() {
  console.log("Key is pressed");
}

function keyReleased() {
  console.log("Key is released");
}

function keyChanged() {
  console.log("Key is changed");
}

// 2) addEventListener("event",callback,useCapture)

const btn = document.querySelector("#btn1");
console.log(btn);

btn.addEventListener("click", () => {
  console.log("Button Clicked");
});

const h1Tag = document.createElement("h1");
h1Tag.textContent = "Hello World";

h1Tag.addEventListener("click", () => {
  h1Tag.style.backgroundColor = "red";
  h1Tag.style.color = "white";
});

document.body.appendChild(h1Tag);

//! EVENT PROPAGATION
const section = document.querySelector("section");
const article = document.querySelector("article");
const div = document.querySelector("div");

section.addEventListener("click", (e) => {
  e.stopPropagation()
  section.style.backgroundColor = "red";
  console.log("section");
},0);

article.addEventListener("click", (e) => {
  e.stopPropagation()
  article.style.backgroundColor = "blue";
  console.log("article");
},0);

div.addEventListener("click", (e) => {
  e.stopPropagation()
  div.style.backgroundColor = "green";
  console.log("div1");
},0);

div.addEventListener("click", (e) => {
  e.stopImmediatePropagation()
  console.log("div2");
},0);

div.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("div3");
},0);
