# 📘 Comprehensive JavaScript Interview Notes

## 1. Printing Statements

These are used to output data, either to the webpage or the developer console.

- `document.write()`: Prints data directly to the UI/viewport. _(Note: Generally deprecated in modern web development as it can overwrite the entire document)._
- `document.writeln()`: Similar to `write()`, but adds a new line character at the end.
- `console.log()`: Prints data to the browser's console window. Primarily used for debugging.

```javascript
console.log("Hello World"); // Most common for debugging
```

---

## 2. Tokens

A **Token** is the smallest individual unit in any programming language. JavaScript has 4 main types of tokens:

1.  **Keywords**: Predefined words with specific meanings reserved by the language. They are always in lowercase (e.g., `if`, `else`, `var`, `let`, `const`).
2.  **Identifiers**: Names given by the developer to variables, functions, classes, etc.
3.  **Literals / Values**: The actual raw data stored inside a variable (e.g., `10`, `"Hello"`).
4.  **Operators**: Symbols used to perform operations between operands (e.g., `+`, `-`, `=`, `==`).

---

## 3. Data Types

JavaScript data types are categorized into two main groups: Primitive and Non-Primitive.

### A. Primitive Data Types

Primitives hold a single value, are **immutable** (cannot be changed directly), and are passed by **value**.

- **Number**: Represents both integer and floating-point numbers.
- **String**: Textual data.
  - _Interview Tip:_ Modern JS uses **Template Literals** (backticks `` ` ``). They allow for multi-line strings and string interpolation (embedding variables using `${}`).
- **Boolean**: Logical entity representing `true` or `false`.
- **Undefined**: A variable that has been declared but not assigned a value. The JavaScript engine assigns this implicitly.
- **Null**: Represents the intentional absence of any object value. Assigned explicitly by the developer.
  - _Interview Trap:_ `typeof null` returns `"object"`. This is a known, historical bug in JavaScript.
- **BigInt**: Used to store numeric values that are too large to be represented by a standard Number (beyond `2^53 - 1`). Appended with an `n` (e.g., `1n`).
- **Symbol**: Represents a unique and immutable identifier. Even if two symbols have the same description, they are not strictly equal.

```javascript
var a8 = Symbol("Hello");
var a9 = Symbol("Hello");
console.log(a8 === a9); // false
```

### 💡 `==` vs `===` (Crucial Interview Question)

- `==` (Loose Equality): Compares the **data/value** only. It performs type coercion if the datatypes are different.
- `===` (Strict Equality): Compares both the **data/value** AND the **datatype**. No type coercion occurs.

```javascript
console.log(10 == "10"); // true
console.log(10 === "10"); // false
```

### B. Non-Primitive Data Types

Non-Primitives (Reference types) can hold collections of values, are **mutable**, and are passed by **reference**.

- **Object**: Key-value pairs. (`{ firstname: "John" }`)
- **Array**: Ordered lists of values. (`[10, 20, 30]`)
- **Function**: Callable blocks of code. (`function greet() {}`)

### 💡 Mutable vs Immutable Example

```javascript
// Immutable (Primitive)
var str = "Hello";
str[0] = "J";
console.log(str); // Output: "Hello" (The original string cannot be mutated)

// Mutable (Non-Primitive)
var arr = [10, 20, 30];
arr[0] = 100;
console.log(arr); // Output: [100, 20, 30] (The array is modified in memory)
```

---

## 4. Hoisting

**Hoisting** is JavaScript's default behavior of moving variable and function declarations to the top of their respective scopes during the compilation phase, before the code is executed.

- _Note:_ Only the **declaration** is hoisted, not the initialization.

```javascript
console.log(a); // Output: undefined (declaration is hoisted, but value is not yet assigned)
var a = 10;
console.log(a); // Output: 10
```

---

## 5. `var` vs `let` vs `const`

| Feature           | `var`                    | `let`              | `const`            |
| :---------------- | :----------------------- | :----------------- | :----------------- |
| **Scope**         | Global or Function/Local | Block Scope        | Block Scope        |
| **Re-declare**    | ✅ Yes                   | ❌ No              | ❌ No              |
| **Re-initialize** | ✅ Yes                   | ✅ Yes             | ❌ No              |
| **Hoisting**      | Hoisted as `undefined`   | Hoisted but in TDZ | Hoisted but in TDZ |

### 💡 Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period of time during which `let` and `const` variables cannot be accessed. It starts from the beginning of the block until the exact line where the variable is declared and initialized. Accessing them in the TDZ throws a `ReferenceError`.

```javascript
// console.log(y); // ERROR: Cannot access 'y' before initialization (TDZ)
let y = 20;
```

---

## 6. Types of Variable Scopes

1.  **Global Scope**: Variables declared outside of any function, block, or loop. They can be accessed anywhere in the file. (`var` attaches to the window object; `let`/`const` are in script scope).
2.  **Local Scope**:
    - **Function Scope**: Variables declared inside a function (applies to `var`, `let`, `const`). Cannot be accessed outside the function.
    - **Block Scope**: Variables declared inside `{}` blocks like `if` statements or loops. (Applies **only** to `let` and `const`. `var` ignores block scope and leaks out).

---

## 7. Functions in JavaScript

A function is a reusable block of code designed to perform a particular task. There are 10 standard variations/patterns:

### 1. Named Function

A standard function with an identifier. Function hoisting applies here, meaning it can be called before it is defined.

```javascript
greet(); // Works due to hoisting
function greet() {
  console.log("Hello!");
}
```

### 2. Anonymous Function

A function without a name. Often assigned to variables or used as callbacks.

```javascript
// function() { console.log("No name"); }
```

### 3. Function Expression

When an anonymous function is assigned to a variable. (Not hoisted).

```javascript
let display = function () {
  console.log("Display");
};
display();
```

### 4. Return Type Function

A function that calculates a value and returns it to the caller using the `return` keyword.

```javascript
function sum() {
  let n1 = 10;
  let n2 = 20;
  let result = n1 + n2;
  return result;
}
let res = sum();
console.log(res); // 10 (n2 defaults to 1)
```

### 5. Function with Parameters & Defaults

Functions that accept inputs. You can set default values to prevent `undefined` if arguments aren't passed.

```javascript
const multiply = function (n1 = 1, n2 = 1) {
  console.log(n1 * n2);
};
multiply(10, 2); // 20
multiply(10); // 10 (n2 defaults to 1)
```

### 6. Rest Parameter Function

The `...` syntax allows a function to accept an indefinite number of arguments as a **pure array**.

- _Interview Tip:_ `arguments` is an array-like object (older JS), whereas the rest parameter is a real array. The rest parameter must always be the **last** parameter.

```javascript
function userLists(user1, ...rest) {
  console.log(user1); // Ram
  console.log(rest); // ['Shayam', 'John']
}
userLists("Ram", "Shayam", "John");
```

### 7. IIFE (Immediately Invoked Function Expression)

A function that executes the moment it is defined. Often used to avoid polluting the global scope.

```javascript
(function (name) {
  console.log("Welcome " + name);
})("John");
```

### 8. Higher-Order & Callback Functions

- **Callback Function**: A function passed as an argument to another function.
- **Higher-Order Function (HOF)**: A function that accepts another function as an argument, or returns a function.

```javascript
function sum(n1, n2) {
  console.log(n1 + n2);
} // Callback
function calculate(x, y, fun) {
  fun(x, y);
} // HOF
calculate(10, 20, sum);
```

### 9. Nested Functions, Lexical Scoping & Closures (Crucial!)

- **Lexical Scoping**: The JS engine's ability to look outside a function's local scope to find variables in its outer/parent scope.
- **Closure**: A function bundled together with its lexical environment. It allows a child function to "remember" and access variables from its parent function, **even after the parent function has finished executing.**

```javascript
function counter() {
  let count = 0; // Parent scope
  return function () {
    count++; // Accessing parent variable creates a Closure
    console.log("Count is", count);
  };
}
let increment = counter();
increment(); // Count is 1
increment(); // Count is 2
```

### 10. Arrow Functions (ES6)

A concise syntax for writing function expressions. They do not have their own `this` context.

Here are the 7 syntax variations:

```javascript
// 1. Standard Arrow Function
let a1 = () => {
  console.log("Standard");
};

// 2. Using underscore for empty params
let a2 = (_) => {
  console.log("Underscore");
};

// 3. Single parameter (Parentheses are optional)
let a3 = (n1) => {
  console.log("Value: ", n1);
};

// 4. Single-line statement
let a4 = () => console.log("Single Line");

// 5. Explicit Return (Using 'return' keyword inside block)
let a5 = () => {
  return "Explicit";
};

// 6. Implicit Return (No block, returns the statement automatically)
let a6 = () => "Implicit";

// 7. Returning an Object implicitly (Requires wrapping object in parentheses)
let a7 = () => ({ name: "John Doe" });
```

## Mastering JavaScript Objects: A Beginner's Guide

Welcome to the world of JavaScript! One of the most important concepts you will learn as a fresher is how to work with **Objects**. In JavaScript, objects are used to store collections of data and more complex entities. Think of an object like a real-world item—for example, an "Employee" has properties like a name, a salary, and a company.

Here is a comprehensive breakdown of how to create, read, update, and delete data using JavaScript objects.

---

### 3 Ways to Create an Object

There are three primary ways to create an object in JavaScript. As a beginner, you will use the **Object Literal** method most of the time, but it is great to know all three!

| Method                      | Description                                                                        | Best Use Case                                                         |
| :-------------------------- | :--------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **1. Object Literal**       | The simplest and most common way to create an object using curly braces `{}`.      | Quick configuration objects, single items, passing data.              |
| **2. Object Constructor**   | Uses the `new Object()` syntax to instantiate an object.                           | Rarely used in modern JS, but good to understand for theory.          |
| **3. Constructor Function** | Uses a function as a blueprint to create multiple objects with the same structure. | Creating multiple instances of the same "type" (e.g., many students). |

#### Code Examples

```javascript
// 1. Object Literal (Most Used)
const obj1 = {
  id: 1,
  name: "John",
  age: 25,
};
console.log(obj1);

// 2. Object Constructor
const obj2 = new Object({ id: 2, name: "Jane", age: 24 });
console.log(obj2);

// 3. Constructor Function
function Student(studentName, studentRollNo) {
  this.fullname = studentName;
  this.rollNo = studentRollNo;
}

const s1 = new Student("John Doe", "ABC123");
console.log(s1);
```

---

### CRUD Operations with Objects

CRUD stands for **Create, Read, Update, and Delete**. These are the four basic operations you will perform on almost any piece of data in programming. Let's look at how to apply CRUD to a single employee object.

#### 1. CREATE

To create an object, simply define it with its key-value pairs.

```javascript
const employee = {
  id: 1,
  empName: "John Doe",
  company: "TCS",
  salary: 50000,
  city: "Delhi",
};
```

#### 2. READ

Once your object is created, you need to be able to read the data inside it. There are two main ways to access object properties, plus a way to loop through all of them.

- **Dot Notation (`.`):** The standard and easiest way to access a known property.
- **Square Bracket Notation (`[]`):** Extremely useful when you want to access a key dynamically using a variable.

```javascript
// Using dot operator
console.log(employee.empName); // Output: John Doe

// Using square brackets
console.log(employee["company"]); // Output: TCS

// Why use square brackets? Dynamic access!
let x = "salary";
console.log(employee.x); // Output: undefined (looks for a literal key named 'x')
console.log(employee[x]); // Output: 50000 (evaluates 'x' to 'salary')
```

> **Iterating over an Object:**
> The `for...in` loop is the standard way to loop through all the keys in an object.
>
> ```javascript
> for (let key in employee) {
>   console.log(employee[key]); // Prints every value in the object
> }
> ```

#### 3. UPDATE & ADD NEW KEYS

Modifying an object is straightforward. You can use dot notation to update an existing property or assign a brand-new property to the object.

```javascript
// UPDATE an existing key
employee.city = "Noida";

// ADD a new key
employee.pinCode = 890765;
employee.demo = "delete me";
```

#### 4. DELETE

If you no longer need a property inside an object, you can remove it entirely using the `delete` keyword.

```javascript
// DELETE a key-value pair
delete employee.demo;

// View the final object
console.log(employee);
```

# JavaScript: Objects, Shallow Copy, and Deep Copy

In JavaScript, objects are reference data types. Understanding how they are stored in memory and how to copy them is crucial for avoiding unintended side effects in your applications.

---

## 1. Nested Objects
A nested object is simply an object that contains another object as a property value. Accessing these requires "chaining" dot notation.

```javascript
let user = {
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 25,
  address: {
    city: "Noida",
    street: "3A",
    pincode: 879061,
  },
};

console.log(user.fullName.firstName); // "John"
console.log(user.address.pincode);    // 879061
```

---

## 2. Reference vs. Copy
When you assign one object to another using the `=` operator, you are **not** creating a copy. Instead, both variables point to the same memory location (reference).

```javascript
let obj1 = { name: "John", city: "Delhi" };
let obj2 = obj1; // Both point to the same reference

obj2.city = "Noida";

console.log(obj1.city); // "Noida" (Original is mutated!)
```

---

## 3. Shallow Copy
A shallow copy creates a new object and copies the top-level properties. However, if the object contains **nested objects**, the nested objects still point to the original references.

### Ways to create a Shallow Copy:
1.  **Spread Operator (`...`)**
2.  **Object.assign()**

```javascript
let obj1 = { name: "John", city: "Delhi" };

// Way 1: Spread Operator
let obj2 = { ...obj1 };

// Way 2: Object.assign
// let obj2 = Object.assign({}, obj1);

obj2.city = "Noida"; 

console.log(obj1.city); // "Delhi" (Safe)
console.log(obj2.city); // "Noida"
```

> **Note:** If `obj1` had an `address: { city: "Noida" }` object inside it, changing `obj2.address.city` would still change `obj1.address.city`.

---

## 4. Deep Copy
A deep copy creates a completely independent clone of the object, including all nested objects.



### Method 1: `JSON.parse(JSON.stringify())`
This was the traditional way to deep copy, but it has significant limitations.
* **Pros:** Easy to use.
* **Cons:** It destroys **functions**, `undefined` values, and `Date` objects.

### Method 2: `structuredClone()` (Recommended)
This is a modern Web API (available in Node.js 17+ and modern browsers) that handles deep cloning efficiently.

```javascript
let emp1 = {
  ename: "Harsh",
  age: 20,
  address: {
    city: "Noida",
  },
  greet: function() { console.log("Hello"); }
};

// Recommended Way
let emp2 = structuredClone(emp1);

emp2.address.city = "Delhi";

console.log("EMP 1 City:", emp1.address.city); // "Noida" (Original remains unchanged)
console.log("EMP 2 City:", emp2.address.city); // "Delhi"
```

---

## Summary Table

| Feature | Reference (`=`) | Shallow Copy (`...`) | Deep Copy (`structuredClone`) |
| :--- | :--- | :--- | :--- |
| **Top-level properties** | Linked | Independent | Independent |
| **Nested properties** | Linked | Linked | Independent |
| **Memory Address** | Same | Different (Top-level) | Different (All levels) |
| **Performance** | Fastest | Fast | Slower (Complexity based) |


---

# 📘 JavaScript Advanced Concepts – Complete Notes


# 🔹 1. Object Destructuring

## 👉 What is Destructuring?

Destructuring allows you to **extract values from objects or arrays** and store them in variables easily.

---

## ✅ Example 1: Basic Object Destructuring

```js
let employee1 = {
  id: 1,
  ename: "John",
  company: "HCL",
  salary: 50000,
};

let {
  ename: empName,
  salary: sal = null,
  designation = "Not Available",
} = employee1;

console.log(empName, sal, designation);
```

### 🔍 Explanation:

* `ename: empName` → renaming property
* `salary: sal = null` → default value if missing
* `designation = "Not Available"` → property not present → default used

👉 Output:

```
John 50000 Not Available
```

---

## ✅ Example 2: Nested Object Destructuring

```js
let employee2 = {
  fullname: {
    firstName: "Jane",
    lastName: "Doe",
  },
  age: 25,
  address: {
    city: "Delhi",
    street: "Block B",
    pin: 789067,
  },
};

let {
  fullname: { firstName, lastName },
  age,
  address: { street },
} = employee2;
```

### 🔍 Explanation:

* Accessing **nested properties**
* No need to write `employee2.fullname.firstName`

👉 Output:

```
Jane Doe Block B
```

---

# 🔹 2. Arrays in JavaScript

## 👉 Ways to Create Array

```js
const arr1 = [10];           // Array Literal
const arr2 = new Array(10); // Constructor
```

### ⚠️ Difference:

* `[10]` → array with one element (value 10)
* `new Array(10)` → array of length 10 (empty slots)

---

# 🔹 3. Array Methods

---

## ✅ push()

Adds elements at the end

```js
arr.push(60, 70);
```

👉 Returns: New length

---

## ✅ pop()

Removes last element

```js
arr.pop();
```

👉 Returns: Removed element

---

## ✅ unshift()

Adds elements at beginning

```js
arr.unshift(100);
```

---

## ✅ shift()

Removes first element

```js
arr.shift();
```

---

## ✅ slice()

```js
arr.slice(start, end);
```

### 🔍 Key Points:

* Does **NOT modify original array**
* `end` index is **excluded**

---

## ✅ splice()

```js
arr.splice(start, deleteCount, newElements);
```

### 🔍 Key Points:

* **Modifies original array**
* Can add/remove/replace elements

---

# 🔹 4. Iteration Methods

---

## ✅ forEach()

```js
arr.forEach((ele) => console.log(ele));
```

### ❌ Important:

* Does NOT return anything (`undefined`)

---

## ✅ map()

```js
let newArr = arr.map((ele) => ele + 5);
```

### ✅ Returns:

* New array

---

## ✅ filter()

```js
arr.filter((ele) => ele > 10);
```

👉 Returns elements matching condition

---

## ✅ find()

```js
arr.find((ele) => ele === 5);
```

👉 Returns first matching element

---

## ✅ findIndex()

```js
arr.findIndex((ele) => ele === 5);
```

👉 Returns index

---

## ✅ reduce()

```js
arr.reduce((acc, ele) => acc + ele, 0);
```

### 🔍 Explanation:

* `acc` → accumulator
* Used for sum, avg, etc.

---

# 🔹 5. Interview Problem (Important)

```js
const developers = employees.filter(e => e.desg === "dev");
const totalSal = developers.reduce((acc, e) => acc + e.sal, 0);

let avg = totalSal / developers.length;
```

### 🎯 Concept Used:

* `filter` → select data
* `reduce` → aggregate data

---

# 🔹 6. Sorting

```js
arr.sort();
```

### ⚠️ Problem:

* Default sorting is **lexicographical (string based)**

```js
arr.sort((a, b) => a - b);
```

### ✅ Correct for numbers

---

# 🔹 7. Strings

---

## ✅ String Types

```js
"Hello"
'Hello'
`Hello ${name}` // Template literal
```

---

## 🔹 String Methods

---

## ✅ slice()

```js
str.slice(0, 4);
```

✔ Supports negative index

---

## ✅ substring()

```js
str.substring(0, 4);
```

❌ Negative index not allowed

---

## ✅ substr()

```js
str.substr(0, 4);
```

✔ Takes length instead of end index

---

## ✅ padStart / padEnd

```js
phone.slice(0,6).padEnd(10,"X");
```

👉 Used for masking data

---

## ✅ replace vs replaceAll

```js
str.replace("JS", "Java");
str.replaceAll("JS", "Java");
```

---

## ✅ split()

```js
str.split(" ");
```

👉 Converts string → array

---

## ✅ join()

```js
arr.join(" ");
```

👉 Converts array → string

---

# 🔹 8. Palindrome Function

```js
function checkPalindrome(str) {
  let revStr = str.split("").reverse().join("");
  return revStr === str;
}
```

### 🔍 Steps:

1. Convert to array
2. Reverse
3. Join
4. Compare

---

# 🔹 9. setTimeout & setInterval

---

## ✅ setTimeout()

```js
setTimeout(() => {
  console.log("Timeout");
}, 5000);
```

👉 Runs once after delay

---

## ✅ setInterval()

```js
let id = setInterval(() => {
  console.log("Interval");
}, 3000);
```

👉 Runs repeatedly

---

## ✅ clearInterval()

```js
clearInterval(id);
```

👉 Stops interval

---

# 🔹 10. Promises

---

## ✅ Creating Promise

```js
let p = new Promise((resolve, reject) => {
  resolve(data);
});
```

---

## ✅ States

* Pending
* Fulfilled → `then()`
* Rejected → `catch()`

---

## ✅ then()

```js
p.then(res => console.log(res));
```

---

## ✅ catch()

```js
p.catch(err => console.log(err));
```

---

## ✅ finally()

```js
p.finally(() => console.log("Done"));
```

👉 Always executes

---

# 🔹 11. Fetch API

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```

### 🔍 Steps:

1. Fetch data
2. Convert to JSON
3. Use data

---

# 🔹 12. Async / Await

```js
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
}
```

### ✅ Benefits:

* Cleaner than `.then()`
* Looks like synchronous code

---

# 🔹 13. Event Loop (VERY IMPORTANT)

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

---

## 🔍 Execution Order:

1. Synchronous code → `Start`, `End`
2. Microtask Queue → `Promise`
3. Callback Queue → `setTimeout`

---

## 🎯 Final Output:

```
Start
End
Promise
Timeout
```

