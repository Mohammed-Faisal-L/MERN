const fs = require("fs");
const http = require("http");
const crypto = require("crypto");

// sync code
let a = 20;
let b = 40;
function add() {
  c = a + b;
  console.log(c);
}
add();

// async (a)
setTimeout(() => {
  console.log("set time out");
}, 0);

crypto.pbkdf2Sync("password", "salt", 5000, 50, "sha512");
console.log("key1 sync generated");

crypto.pbkdf2("password", "salt", 5000, 50, "sha512", () => {
  console.log("key2 async generated");
});

fs.readFile("./textXontent.txt", "utf8", () => {
  console.log("file read");
});

http.get("http://dummyjson.com/products", (request, response) => {
  console.log(request, " request");
  console.log(response, " response");
  console.log("API call this got executed ");
});
