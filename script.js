//! PRINTING STATEMENTS
// // 1) document.write() <-- deprecated, print data on UI
// document.write("Hello")

// // 2) document.writeln(): to print data on viewport/UI
// document.writeln("<em>Byee</em>");

// // 3) console.log(): to print data on console window
// console.log("Hello World");

//! TOKEN : smallest unit of any programming language
// There are 4 types of token

// 1) Keywords : predefined words with has specific meaning. All keywords must me in lowercase. eg: if, else, var, let, const etc...

// 2) Identifiers : Name given to a class, variables, functions etc..

// 3) Literals / Values : data store into a variable

// 4) Operators : used to perform some operation between operands

//! DATATYPES
// There are 2 types:

// //! 1) Primitive : call by value (immutable)
// // - number

// var a1 = 10.1;
// console.log(a1); // 10.1
// console.log(typeof a1); // number

// // - string

// var a2 = "Hello World";
// console.log(a2); // Hello World
// console.log(typeof a2); // string

// //! Advantage of using backticks
// // 1) multi-line string
// // 2) string interpolation using ${}

// var a3 = `Hey There !!!
// Welcome to Javascript Class ${a2}`;
// console.log(a3);
// console.log(typeof a3); // string

// // - boolean

// var a4 = true;
// console.log(a4); // true
// console.log(typeof a4); // boolean
// console.log(typeof typeof a4); // string

// // - undefined : default value provided by js-engine implicitly
// var a5;
// console.log(a5); // undefined
// console.log(typeof a5); // undefined

// // - null : provided by developers intentionally
// var a6 = null;
// console.log(a6); // null
// console.log(typeof a6); // object

// // - bigint : [-2^53 - 1  to  2^53 - 1]
// var a7 = 1n;
// console.log(a7);
// console.log(typeof a7); // bigint

// // - symbol
// var a8 = Symbol("Hello");
// var a9 = Symbol("Hello");

// console.log(a8); // Symbol(Hello)
// console.log(a9); // Symbol(Hello)

// console.log(a8 == a9); // false

// //! diffrence between == and ===
// var n1 = 10;
// var n2 = "10";

// console.log(n1 == n2); // true, check data not datatype
// console.log(n1 === n2); // false, check data and datatype

// //! 2) Non-Primitive : call by reference (mutable)
// // - object
// var obj = { firstname: "John", lastname: "Doe" };
// console.log(obj);
// console.log(obj.firstname); // John
// console.log(typeof obj); // object

// // - array
// var arr = [10, 20, 30, 40];
// console.log(arr);
// console.log(arr[2]); // 30
// console.log(typeof arr); // object

// // - function
// function greet() {
//   console.log("Welcome");
// }
// greet();
// console.log(typeof greet); // function

// var specialNumber = "Hello" * 10;
// console.log(specialNumber);// NaN
// console.log(typeof specialNumber);// number

//! mutable and immutable example
var str = "Hello";
str[0] = "J";
console.log(str); // Hello <-- immutable

var arr1 = [10, 20, 30];
arr1[0] = 100;
console.log(arr1); // [100,20,30] <-- mutable

//! HOISTING: Moving declaration part at the top of the code internally 

console.log(a);// ud, due to hoisting
var a = 10
console.log(a);// 10

