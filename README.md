<<<<<<< HEAD
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006

### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---
# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9 

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST 

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK 


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---
=======
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

>>>>>>> 3e67ad0d17d2f6e380493a73d65402f97037a2f5
