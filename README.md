1.What is the difference between var, let, and const?
Answer:
var x = 30  
let y = 25  
const z = 10  
var → redeclare & update possible.
let → only update possible.
const → nothing possible (fixed).

2.What is the difference between map(), forEach(), and filter()?
Answer:
forEach()
Just loops through array elements.
Doesn’t return new array.
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));

map()
Loops through AND creates a new array with results.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

filter()
Loops through AND creates a new array with only elements that pass a condition.
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); 

3.What are arrow functions in ES6?
Answer:
Arrow function = ES6 er short way to write functions using => (no function keyword, auto return if one line).
Ex:
const add = (a, b) => a + b;

4.How does destructuring assignment work in ES6?
Answer:
Destructuring in ES6 = a short way to unpack values from arrays or objects into separate variables.
Array Ex:
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

Object Ex:
const person = { name: "Rahim", age: 22 };
const { name, age } = person;
console.log(name);
console.log(age);

5.Explain template literals in ES6. How are they different from string concatenation?
Answer:
Template Literals (ES6)
A new way to work with strings using backticks `, not quotes.
You can easily insert variables with ${ }.
Supports multi-line strings without \n.
Example
let name = "Karim";
let age = 22;

Template Literal
console.log(`My name is ${name} and I am ${age} years old.`);

Old Concatenation
console.log("My name is " + name + " and I am " + age + " years old.");

