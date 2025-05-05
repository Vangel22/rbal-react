const { name } = require("ejs");

// Global
var x = "Hello students";

// Function

function greet() {
  var test = "I am testing";

  console.log(test);
}

console.log(x);
greet();

// Block

// const user = {
//   name: "User me",
//   test: function () {
//     console.log("test", this.name);
//   },
// };

// user.test();

// Closure

function outerFunction() {
  let counter = 0; // This is a local variable in the outer function

  function innerFunction() {
    counter++; // The inner function has access to `counter` from the outer function
    console.log(counter);
  }

  return innerFunction; // The inner function is returned
}

const closureExample = outerFunction(); // `closureExample` now holds the inner function

closureExample(); // Logs: 1
closureExample(); // Logs: 2
closureExample(); // Logs: 3
