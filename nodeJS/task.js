const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate has been executed");
});
setTimeout(() => {
  console.log("this is from setTimeout");
}, 0);

Promise.resolve("resolve").then(() => {
  console.log("promise executed..............");
});

fs.readFile("./textContent.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("2nd setTimeout");
  }, 0);
  process.nextTick(() => {
    console.log("2nd nextTick");
  });
  setImmediate(() => {
    console.log("2nd setImmediate executed");
  });
  console.log("file read done");
});

process.nextTick(() => {
  console.log("last process nextTick executed");
});

console.log("last line of execution");
