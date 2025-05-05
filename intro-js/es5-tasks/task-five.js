const user = {
  name: "David",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFunction = user.greet;
greetFunction(); // Fix this so it prints "Hello, my name is David"
