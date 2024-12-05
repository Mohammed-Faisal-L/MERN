let { lastName } = require("./script2");
let obj = require("./script2");

console.log(lastName);

obj.greetings();

let a = 20;
console.log(a + a);

let greetings = () => {
  console.log("greetings from script.js");
};

greetings();

console.log(this);
console.log(global);
console.log(globalThis);
