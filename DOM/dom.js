//! What is DOM ?
// DOM stands for Document Object Model. It is a visual representation of HTML structure in a tree like format

//! DOM Selectors
//--> There are 5 types

//! 1) document.getElementById()
let h1tag = document.getElementById("head1");
console.log(h1tag);

//! 2) document.getElementsByClassName()
let collection1 = document.getElementsByClassName("head2");
console.log(collection1); // HTMLCollection(3) [h2.head2, h3.head2, h4.head2]

//! 3) document.getElementsByTagName()
let collection2 = document.getElementsByTagName("div");
console.log(collection2); //HTMLCollection(3) [div, div, div]

//! 4) document.querySelector("#head1, .head2, div")
let ele = document.querySelector(".head2, div, #head1");
console.log(ele);

//! 5) document.querySelectorAll("#head1, .head2, div")
let lists = document.querySelectorAll("div , .head2, #head1");
console.log(lists); // NodeList(7) [h1#head1, h2.head2, h3.head2, h4.head2, div, div, div]
