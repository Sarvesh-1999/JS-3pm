# 📘 Comprehensive JavaScript Interview Notes



## 1. Printing Statements
These are used to output data, either to the webpage or the developer console.

* `document.write()`: Prints data directly to the UI/viewport. *(Note: Generally deprecated in modern web development as it can overwrite the entire document).*
* `document.writeln()`: Similar to `write()`, but adds a new line character at the end.
* `console.log()`: Prints data to the browser's console window. Primarily used for debugging.

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

* **Number**: Represents both integer and floating-point numbers.
* **String**: Textual data. 
    * *Interview Tip:* Modern JS uses **Template Literals** (backticks `` ` ``). They allow for multi-line strings and string interpolation (embedding variables using `${}`).
* **Boolean**: Logical entity representing `true` or `false`.
* **Undefined**: A variable that has been declared but not assigned a value. The JavaScript engine assigns this implicitly.
* **Null**: Represents the intentional absence of any object value. Assigned explicitly by the developer.
    * *Interview Trap:* `typeof null` returns `"object"`. This is a known, historical bug in JavaScript.
* **BigInt**: Used to store numeric values that are too large to be represented by a standard Number (beyond `2^53 - 1`). Appended with an `n` (e.g., `1n`).
* **Symbol**: Represents a unique and immutable identifier. Even if two symbols have the same description, they are not strictly equal.

```javascript
var a8 = Symbol("Hello");
var a9 = Symbol("Hello");
console.log(a8 === a9); // false
```

### 💡 `==` vs `===` (Crucial Interview Question)
* `==` (Loose Equality): Compares the **data/value** only. It performs type coercion if the datatypes are different.
* `===` (Strict Equality): Compares both the **data/value** AND the **datatype**. No type coercion occurs.

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
```

### B. Non-Primitive Data Types
Non-Primitives (Reference types) can hold collections of values, are **mutable**, and are passed by **reference**.

* **Object**: Key-value pairs. (`{ firstname: "John" }`)
* **Array**: Ordered lists of values. (`[10, 20, 30]`)
* **Function**: Callable blocks of code. (`function greet() {}`)

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

* *Note:* Only the **declaration** is hoisted, not the initialization.

```javascript
console.log(a); // Output: undefined (declaration is hoisted, but value is not yet assigned)
var a = 10;
console.log(a); // Output: 10
```

---

## 5. `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Global or Function/Local | Block Scope | Block Scope |
| **Re-declare** | ✅ Yes | ❌ No | ❌ No |
| **Re-initialize** | ✅ Yes | ✅ Yes | ❌ No |
| **Hoisting** | Hoisted as `undefined` | Hoisted but in TDZ | Hoisted but in TDZ |

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
    * **Function Scope**: Variables declared inside a function (applies to `var`, `let`, `const`). Cannot be accessed outside the function.
    * **Block Scope**: Variables declared inside `{}` blocks like `if` statements or loops. (Applies **only** to `let` and `const`. `var` ignores block scope and leaks out).

---

## 7. Functions in JavaScript
A function is a reusable block of code designed to perform a particular task. There are 10 standard variations/patterns:

### 1. Named Function
A standard function with an identifier. Function hoisting applies here, meaning it can be called before it is defined.
```javascript
greet(); // Works due to hoisting
function greet() { console.log("Hello!"); }
```

### 2. Anonymous Function
A function without a name. Often assigned to variables or used as callbacks.
```javascript
// function() { console.log("No name"); }
```

### 3. Function Expression
When an anonymous function is assigned to a variable. (Not hoisted).
```javascript
let display = function() { console.log("Display"); };
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
console.log(res);    // 10 (n2 defaults to 1)
```

### 5. Function with Parameters & Defaults
Functions that accept inputs. You can set default values to prevent `undefined` if arguments aren't passed.
```javascript
const multiply = function(n1 = 1, n2 = 1) { console.log(n1 * n2); };
multiply(10, 2); // 20
multiply(10);    // 10 (n2 defaults to 1)
```

### 6. Rest Parameter Function
The `...` syntax allows a function to accept an indefinite number of arguments as a **pure array**. 
* *Interview Tip:* `arguments` is an array-like object (older JS), whereas the rest parameter is a real array. The rest parameter must always be the **last** parameter.
```javascript
function userLists(user1, ...rest) {
  console.log(user1); // Ram
  console.log(rest);  // ['Shayam', 'John']
}
userLists("Ram", "Shayam", "John");
```

### 7. IIFE (Immediately Invoked Function Expression)
A function that executes the moment it is defined. Often used to avoid polluting the global scope.
```javascript
(function(name) {
  console.log("Welcome " + name);
})("John");
```

### 8. Higher-Order & Callback Functions
* **Callback Function**: A function passed as an argument to another function.
* **Higher-Order Function (HOF)**: A function that accepts another function as an argument, or returns a function.
```javascript
function sum(n1, n2) { console.log(n1 + n2); } // Callback
function calculate(x, y, fun) { fun(x, y); }   // HOF
calculate(10, 20, sum);
```

### 9. Nested Functions, Lexical Scoping & Closures (Crucial!)
* **Lexical Scoping**: The JS engine's ability to look outside a function's local scope to find variables in its outer/parent scope.
* **Closure**: A function bundled together with its lexical environment. It allows a child function to "remember" and access variables from its parent function, **even after the parent function has finished executing.**

```javascript
function counter() {
  let count = 0; // Parent scope
  return function() { 
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
let a1 = () => { console.log("Standard"); };

// 2. Using underscore for empty params
let a2 = _ => { console.log("Underscore"); };

// 3. Single parameter (Parentheses are optional)
let a3 = n1 => { console.log("Value: ", n1); };

// 4. Single-line statement
let a4 = () => console.log("Single Line");

// 5. Explicit Return (Using 'return' keyword inside block)
let a5 = () => { return "Explicit"; };

// 6. Implicit Return (No block, returns the statement automatically)
let a6 = () => "Implicit";

// 7. Returning an Object implicitly (Requires wrapping object in parentheses)
let a7 = () => ({ name: "John Doe" });
```