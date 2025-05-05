// Example 1 - let and const

// Global scope
function letConstExample() {
  // Function scope
  if (true) {
    // Block scope

    let blockScopedVariable = "I am block scoped";
    // blockScopedVariable = 1;
    const blockScopedConst = "I am also block scoped";

    var myName = "Vangel";

    console.log(blockScopedVariable);
    console.log(blockScopedConst);
  }
  // console.log(blockScopedConst);
  //ReferenceError: blockScopedConst is not defined
  console.log(myName);

  //   for() {
  //     // Block scope
  //   }
}

letConstExample();

const person = {
  name: "John",
};

person.name = "Jane";
console.log(person);

// Example 2 - Default params

function sumTwoNumbers(a = 1, b = 1) {
  return a + b;
}

console.log(sumTwoNumbers());

// Example 3 - Spread operator

// request.body -> email, password
// req.auth

// const data = {
//   ...request.body, // email, password
//   ...req.auth, // token, validate, jwt
// };

// Combined all the data needed to call the validateAuthorization
const data = {
  email: "h.vangel22@gmail.com",
  password: "test",
  token: "some",
  validate: () => {},
  jwt: "some jwt",
};

// validateAuthorization(data)

const program = {
  taskOne: "hello students",
};

const programTwo = {
  ...program,
  taskTwo: "lets learn",
};

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];

const mixed = [...numbers, ...letters];

console.log(mixed);

// Example 4 - Rest operator

function multiply(multipler, ...args) {
  return args.map((element) => multipler * element);
}

const arr = multiply(2, 1, 2, 3); // 2, 4, 6
console.log(arr);

// Example 5 - Destructuring

const personOne = {
  name: "John Doe",
  age: 25,
  city: "New York",
};

const { name, age, city } = personOne;
console.log("Name of the person", name);
console.log("Age of the person", age);
console.log("Place of residence", city);

// CommonJS modules
// Importing - require("path")
// Exporting - module.exports

// ES modules
// Importing - import
// Exporting - export

// Example 6 - Template literals
const oldWay = "Hello, my name is" + name + "and i am" + age + "old.";
const newWay = `Hello, my name is ${name} and i am ${age} old.`;

console.log(newWay);

// Example 7 - Arrow functions
// The this keyword, inherits from its lexical scope

const add = (a, b) => a + b;
console.log(add(2, 3));

// Example 8 - Promises
// Three states: fullfiled, pending, rejected

const myPromise = new Promise((resolve, reject) => {
  let result = 1 + 1;
  if (result == 2) {
    resolve("Result is 2");
  } else {
    reject("Result is rejected");
  }
});

// myPromise
//   .then((res) => console.log(res)) // Status: fullfiled
//   //   .then(res => res.json())
//   .catch((err) => console.log(err)) // Status: rejected
//   .finally(() => console.log("Promise done!")); // Executed every time

// Example 9 - Async and await

async function greeting() {
  try {
    // the same as .then
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);

    // .catch
  } finally {
    console.log("Fetching done!");
    // .finally
  }
}

// greeting();

// Example 10 - Classes
// Prototypal chain - inheritance

// const Animal = {
//     prototype: {
//         speak: function() {
//             // ...
//         }
//     }
// }

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a noise.`);
// };

// const dog = new Animal("Dog");
// dog.speak();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const cat = new Animal("Cat");
cat.speak();
