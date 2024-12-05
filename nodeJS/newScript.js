const { greetings, lastName } = require("./script2");
console.log("hello Node Js");
const { add, multiply } = require("./calculate");
const details = require("./data.json");

var a = 40;

greetings(); //from script2

const calculate = () => {
  console.log(a + a);
};
console.log(lastName);
// console.log(global)
// console.log(module.exports)
calculate();

console.log(add(10, 20));
console.log(multiply(10, 30));
console.log(details);
