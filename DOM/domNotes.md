# JavaScript DOM and Selectors - Detailed Notes

## What is the DOM?

**DOM** stands for **Document Object Model**.

It is a visual, object-oriented representation of the HTML structure of a webpage, formatted in a tree-like structure. This model allows programming languages like JavaScript to interact with, modify, and manipulate the content, structure, and style of a website.

---

## DOM Selectors

DOM Selectors are methods used to target and select specific HTML elements within the DOM tree so that you can interact with them.

There are 5 primary types of DOM selectors:

---

### 1. `document.getElementById()`

- **Purpose**: Selects a single HTML element based on its unique `id` attribute.
- **Returns**: A single Element object, or `null` if no matching ID is found.

#### Example:

```javascript
let h1tag = document.getElementById("head1");
console.log(h1tag);
```

---

### 2. `document.getElementsByClassName()`

- **Purpose**: Selects all HTML elements that share a specific class name.
- **Returns**: An `HTMLCollection` (array-like object)

#### Example:

```javascript
let collection1 = document.getElementsByClassName("head2");
console.log(collection1);

// Output:
// HTMLCollection(3) [h2.head2, h3.head2, h4.head2]
```

---

### 3. `document.getElementsByTagName()`

- **Purpose**: Selects all HTML elements with a specific tag name (e.g., `div`, `p`, `h1`)
- **Returns**: An `HTMLCollection`

#### Example:

```javascript
let collection2 = document.getElementsByTagName("div");
console.log(collection2);

// Output:
// HTMLCollection(3) [div, div, div]
```

---

### 4. `document.querySelector()`

- **Purpose**: Selects the **first** HTML element that matches a given CSS selector
- **Returns**: A single Element object

#### Example:

```javascript
// Selects the first matching element
let ele = document.querySelector(".head2, div, #head1");
console.log(ele);
```

---

### 5. `document.querySelectorAll()`

- **Purpose**: Selects **all** HTML elements that match a given CSS selector
- **Returns**: A static `NodeList` (array-like object)

#### Example:

```javascript
let lists = document.querySelectorAll("div, .head2, #head1");
console.log(lists);

// Output:
// NodeList(7) [
//   h1#head1,
//   h2.head2,
//   h3.head2,
//   h4.head2,
//   div,
//   div,
//   div
// ]
```

---

## Important Note

- Both `HTMLCollection` and `NodeList` are array-like structures.
- `NodeList` supports modern array methods like `.forEach()`
- `HTMLCollection` does **not** support array methods directly

---

## Summary

| Selector                 | Returns        | Use Case                    |
| ------------------------ | -------------- | --------------------------- |
| `getElementById`         | Element        | Single element by ID        |
| `getElementsByClassName` | HTMLCollection | Multiple elements by class  |
| `getElementsByTagName`   | HTMLCollection | Multiple elements by tag    |
| `querySelector`          | Element        | First matching CSS selector |
| `querySelectorAll`       | NodeList       | All matching CSS selectors  |

**Iteration Differences:**

- **NodeList:** Supports the `forEach` method natively. You can iterate through it directly.
  ```javascript
  lists.forEach((ele) => {
    console.log(ele);
  });
  ```
- **HTMLCollection:** Does **not** support the `forEach` method natively. You must use a standard `for` loop or convert it to a true array first.

### Difference 2: Live vs. Static Collections (Crucial)

This is the most significant behavioral difference between the two.

- **HTMLCollection is LIVE:** It is automatically updated when the underlying document changes. If you select elements and then add a new element of that type to the DOM, the `HTMLCollection` length will automatically increase.
- **NodeList (from `querySelectorAll`) is STATIC:** It acts as a snapshot of the DOM at the exact moment the query was run. If you add or remove elements matching the query afterwards, the `NodeList` will **not** update.

**Example Demonstration:**

```javascript
const collection = document.getElementsByTagName("div"); // Live
const list = document.querySelectorAll("div"); // Static

console.log("collection initial length:", collection.length); // e.g., 3
console.log("list initial length:", list.length); // e.g., 3

// Adding 5 new divs to the DOM dynamically
for (let i = 0; i < 5; i++) {
  const divTag = document.createElement("div");
  divTag.textContent = "I am Div " + i;
  document.body.appendChild(divTag);
}

// Checking lengths after DOM modification
console.log("collection new length:", collection.length); // 8 (Updated automatically!)
console.log("list new length:", list.length); // 3 (Remains unchanged)
```

---

## 3. Converting Collections to Pure Arrays

Because DOM collections are "impure" (array-like but lacking array methods like `map`, `filter`, or `reduce`), it is a common best practice to convert them into pure arrays.

You can do this using **`Array.from()`**:

```javascript
const collection = document.getElementsByTagName("div");
const lists = document.querySelectorAll("div");

let pureCollection = Array.from(collection);
let pureLists = Array.from(lists);

// Now they are true arrays with access to all array methods!
console.log(Array.isArray(pureCollection)); // true
console.log(Array.isArray(pureLists)); // true

// Example usage of pure array methods:
pureCollection.map((el) => console.log(el.textContent));
```

_(Note: You can also use the spread operator `[...collection]` to achieve the same result)._

---

## 4. JavaScript Events

**Events** are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box.

### Event Attributes (Inline Handlers)

In traditional/older implementations, events are often attached directly within the HTML markup using event attributes.

Common event attributes include:

- `onclick`: Triggered when an element is clicked.
- `ondblclick`: Triggered when an element is double-clicked.
- `onmouseenter` / `onmouseleave`: Triggered when the mouse pointer enters or leaves the element's area.
- `onmousemove`: Triggered when the mouse moves over an element.
- `onkeydown`: Triggered when a keyboard key is pressed down.
- `onkeyup`: Triggered when a keyboard key is released.
- `onchange`: Triggered when the value of an element (like an input or select box) has been changed and focus is lost.
- `onsubmit`: Triggered when a form is submitted.

### Implementation Example

**JavaScript Functions:**

```javascript
function singleclick() {
  console.log("Button was clicked once!");
}

function doubleclick() {
  console.log("Button was double-clicked!");
}

function keyPressed() {
  console.log("A key was pressed down in the input field.");
}

function keyReleased() {
  console.log("A key was released in the input field.");
}

function keyChanged() {
  console.log("The input value changed and lost focus.");
}
```

**HTML Mapping:**

```html
<button onclick="singleclick()">Click Once</button>
<button ondblclick="doubleclick()">Click Twice</button>

<input type="text" onkeydown="keyPressed()" placeholder="Type here (keydown)" />
<input
  type="text"
  onkeyup="keyReleased()"
  placeholder="Release key here (keyup)"
/>

<input
  type="text"
  onchange="keyChanged()"
  placeholder="Change value and click away"
/>
```

### Best Practice Note

While the inline event attributes (`onclick="function()"`) are easy to use, modern JavaScript development heavily favors using **`addEventListener`**. This separates your HTML structure from your JavaScript behavior:

```javascript
// Modern alternative to inline onclick
const myButton = document.querySelector("button");
myButton.addEventListener("click", function () {
  console.log("Button clicked using addEventListener!");
});
```
