Here is your cleaned and properly formatted `.md` file content 👇

---

````md
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
````

---

### 2. `document.getElementsByClassName()`

* **Purpose**: Selects all HTML elements that share a specific class name.
* **Returns**: An `HTMLCollection` (array-like object)

#### Example:

```javascript
let collection1 = document.getElementsByClassName("head2");
console.log(collection1);

// Output:
// HTMLCollection(3) [h2.head2, h3.head2, h4.head2]
```

---

### 3. `document.getElementsByTagName()`

* **Purpose**: Selects all HTML elements with a specific tag name (e.g., `div`, `p`, `h1`)
* **Returns**: An `HTMLCollection`

#### Example:

```javascript
let collection2 = document.getElementsByTagName("div");
console.log(collection2);

// Output:
// HTMLCollection(3) [div, div, div]
```

---

### 4. `document.querySelector()`

* **Purpose**: Selects the **first** HTML element that matches a given CSS selector
* **Returns**: A single Element object

#### Example:

```javascript
// Selects the first matching element
let ele = document.querySelector(".head2, div, #head1");
console.log(ele);
```

---

### 5. `document.querySelectorAll()`

* **Purpose**: Selects **all** HTML elements that match a given CSS selector
* **Returns**: A static `NodeList` (array-like object)

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

* Both `HTMLCollection` and `NodeList` are array-like structures.
* `NodeList` supports modern array methods like `.forEach()`
* `HTMLCollection` does **not** support array methods directly

---

## Summary

| Selector                 | Returns        | Use Case                    |
| ------------------------ | -------------- | --------------------------- |
| `getElementById`         | Element        | Single element by ID        |
| `getElementsByClassName` | HTMLCollection | Multiple elements by class  |
| `getElementsByTagName`   | HTMLCollection | Multiple elements by tag    |
| `querySelector`          | Element        | First matching CSS selector |
| `querySelectorAll`       | NodeList       | All matching CSS selectors  |


