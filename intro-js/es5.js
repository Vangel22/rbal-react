// Example 1
// "use strict";

// function strictModeExample() {
//   x = 3.14;
// }

// strictModeExample();

// Example 2

// forEach - just traverses and does not return anything
// [1, 2, 3].forEach((num) => console.log(num));
// [4, 5, 6].forEach(function (num) {
//   console.log("Num", num);
// });

// map - it maps every element and returns a new array
var mappedNumbers = [1, 2, 3].map((num) => num + 1);
// console.log(mappedNumbers);

// filter - is going to filter an element that is matching the condition, it returns an array
var filteredArray = [1, 2, 3].filter((num) => num > 1);
// var filteredArrayFun = [1, 2, 3].filter(function (num) {
//   if (num > 1) {
//     return num;
//   }
// });
// console.log(filteredArray);
// console.log(filteredArrayFun);

var sum = [1, 2, 3].reduce((acc, curr) => (acc += curr), 0);
// acc = acc + curr
console.log(sum);

var everyElement = [1, 2, 3].every((num) => num > 1);
console.log(everyElement);

var someElement = [1, 2, 3].some((num) => num > 2);
console.log(someElement);

// Example 3 - Object methods

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
};

// console.log(person.firstname);
// person[""];

function access(key) {
  console.log(person[key]);
}

access("firstname");

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(keys);
console.log(values);
console.log(entries);

// Example 4 - JSON

var someJSON = `{ "name": "John", "surname": "Doe" }`;

// console.log(JSON.parse(someJSON));
var human = JSON.parse(someJSON);
console.log(human.name);

var myPersona = {
  firstname: "Vangel",
  lastname: "Hristov",
};

var myPersonaInJSON = JSON.stringify(myPersona);
console.log(myPersonaInJSON);

// Example 5 - Function bind method

var obj = {
  firstname: "John",
  lastname: "Doe",
  // fullName cannot be using "this" with an arrow function
  fullName: function () {
    return this.firstname + " " + this.lastname;
  },
};
var arrowFun = () => {
  console.log("I am an arrow function");
};

arrowFun();

console.log(obj.fullName());

var anotherPerson = {
  firstname: "Jane",
  lastname: "Doe",
};

var fullName = obj.fullName.bind(anotherPerson);
console.log(fullName());

// Example 6 - Callback

var studentLeft = false;
var studentNotHere = false;

function noteMissing() {
  console.log("Noting...");
  // opening a connection to the e-noting
}

function useCallback(callback, errorCallback) {
  if (studentLeft) {
    // errorCallback({
    //   name: "Student left",
    //   message: ":(",
    // });
    errorCallback(noteMissing);
  } else if (studentNotHere) {
    errorCallback({
      name: "Student is missing",
      message: ":(",
    });
  } else {
    callback("Student is still learning :)");
  }
}

useCallback(
  (message) => console.log(message),
  (error) => console.log("Error: ", error.name + " " + error.message)
);

// Callback hell
