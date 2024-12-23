const fs = require("fs");

setImmediate(() => {
  fs.readFile("./textContent.txt", "utf-8", () => {
    console.log("file executed from setImmediate");
  });
});

setTimeout(() => {
  console.log("setTimeout executed");
}, 0);

Promise.resolve("resolve").then(() => console.log("promise executed"));

fs.readFile("./textContent.txt", "utf-8", () => {
  console.log("file executed");
});

process.nextTick(() => {
  console.log("first nextTick");
  process.nextTick(() => {
    console.log("inner nextTick");
  });
});
console.log("--------------------------------------- q-2");
console.log("last line of execution");
