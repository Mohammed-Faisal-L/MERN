let a = 20;
let b = 50;

a = b;
console.log(a);

let ab = {
  name: "faisal",
  address: "shivajinagar",
};

let ba = {
  name: "faizan",
  address: "jayanagar",
};

ab = ba;

console.log(ab);
console.log(ba);

ab.name = "aslam";

console.log(ab.name);
console.log(ba.name);

// operators in js
var c = 3;
var d = 4;

console.log(c, " c");
console.log(d, " d");
console.log(c + d, " addition of c and d");
console.log(c - d, " substraction of c and d");
console.log(c * d, "multiplication of c and d");
console.log(c / d, "division of c and d");
console.log(c % d, "modulus of c and d");
console.log(c++, "post increment of c");
console.log(d++, "post increment of d");
console.log(++c, "pre increment of c");
console.log(++d, "pre increment of d");
console.log(c--, "post decrement of c");
console.log(d--, "post decrement of d");
console.log(--c, "pre decrement of c");
console.log(--d, "pre decrement of d");

c = 8;
console.log(c, " c");
console.log((c = 2 + 3), "assignment operator");
console.log((c += 10), "assignment add operator");
console.log((c -= 20), "assignment minus operator");
console.log((c *= 2), "assignment multiply operator");
console.log((c /= 5), "assignment divide operator");
console.log((c %= 4), "assignment modulus operator");

console.log(20 > 10);
console.log(20 >= 10);
console.log(20 < 10);
console.log(20 <= 10);

let marks = 67;
const answer =
  marks >= 85
    ? "Distinction"
    : marks >= 75
    ? "1st class"
    : marks > 60
    ? "2nd class"
    : marks >= 30
    ? "3rd class"
    : marks < 30
    ? "Fail"
    : "Wrong marks";
console.log(answer);

// functions in js
function fun(val) {
  let v = val;
  console.log(v);
}
fun(52);

let func = function (params) {
  console.log(params, "just a comment for anonymous function");
};
func(10);

let sum = (a, b) => a + b;
console.log(sum(5, 9));

// for loops in js

let arr2 = [12, 54, 78, 33, 1];
arr2.forEach((element) => {
  console.log(element);
});

let object = { a: "apple", b: "banana" };
for (const key in object) {
  console.log(key);
  console.log(object[key]);
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
for (const person of people) {
  console.log(`${person.name} is ${person.age} years old.`);
}

// array methods
let arr = [12, 54, 55, 2, 30];
let o = arr.push(1, 2, 1, 2);
console.log(arr, " arr ", o, " output ");

let poppedElement = arr.pop();
console.log(poppedElement, " popped element", arr, "array");

let shift = arr.shift();
console.log(shift, " shifted value", arr, "array");

let unshift = arr.unshift();
console.log(unshift, "  ");

// filter, map, includes, join

let map = arr.map((ele) => ele + 2);
console.log(map, "mapped array");

let filter = arr.filter((ele) => ele > 10);
console.log(filter, " filtered array ");

let join = arr.join(" ");
console.log(join, " joined array");

// reduce method

let reducerArr = [12, 56, 22, 77, 69];
let resVal = reducerArr.reduce((acc, current) => acc + current, 3);
console.log(resVal);

let exmArr = [20, 30, 50, 60, 99, 87, 67, 67, 54, 47];

// let sortedArr = exmArr.sort((a, b) => a - b);
// console.log(sortedArr);
// let lastIndex = sortedArr[sortedArr.length-1];
// console.log(lastIndex);

let highestReduce = exmArr.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(highestReduce);

let arrex = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let result = arrex.reduce((acc, curr) => acc.concat(curr), []);
console.log(result);

let flattenedArr = arrex.flat();
console.log(flattenedArr);

let slice = exmArr.slice(1, 4);
console.log(exmArr, slice);

let splice = exmArr.splice(1, 5);
console.log(exmArr, splice);

let reduceRight = exmArr.reduceRight((acc, curr) => acc + curr, 2);
console.log(exmArr, reduceRight);

let find = exmArr.find((num) => num > 45);
console.log(exmArr, find);

let findIndex = exmArr.findIndex((num) => num < 45);
console.log(findIndex);

let every = exmArr.every((num) => num % 2 === 0);
console.log(every);

let some = exmArr.some((num) => num < 10);
console.log(some);

let includes = exmArr.includes(45);
console.log(includes);

let indexOf = exmArr.indexOf(55);
console.log(indexOf);

let lastIndexOf = exmArr.lastIndexOf(66);
console.log(lastIndexOf);

let reverse = exmArr.reverse();
console.log(reverse);

let sort = exmArr.sort((a, b) => b - a);
console.log(sort);

let flat = [
  [22, 8],
  [22, 5],
  [12, 3],
].flat(1);
console.log(flat);

let flatMap = [1, 2, 2, 2, 2, 2, 2, 0, 3, 3].flatMap((num) => [num * 2]);
console.log(flatMap);

let arrayfrom = Array.from("hello");
console.log(arrayfrom);

let isArray = Array.isArray(exmArr);
console.log(isArray);

// object methods

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  t: {
    w: 3,
    x: 8,
    y: 8,
    z: {
      p: 7,
      q: 9,
    },
  },
};

let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries);

let assign = Object.assign(obj, { z: 10 });
console.log(assign);

let freeze = Object.freeze(obj); // object freezed and cannot add more properties to the object but can modify properties
obj.b = "hello";

let seal = Object.seal(obj); // object freezed and cannot add and modify more properties to the object
console.log(seal);

// shallow copy of objects
let obj2 = { ...obj };
obj2.t.z.q = 40;

console.log(obj, obj2);

// deep copy of objects
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.t.z.p = 9;
obj3.t.z = 20;
obj3.c = 50;
console.log(obj, obj3);

// conditional statements in js

let list = [1, 2, 3, 4, 6, 5, 7, 8, 9];
let mulArr = [];
let res = list.map((ele) => {
  if (ele % 2 === 0) {
    mulArr.push(ele * 2);
  }
});
console.log(res, mulArr);

// condition statements
const fn1 = (val) => {
  if (val > 20) {
    console.log("value greater than 20");
  } else if (val < 30) {
    console.log("value less than 30");
  } else {
    console.log("both failed");
  }
  console.log("i will exec however");

  switch (true) {
    case val > 20: {
      console.log("value greater than 20");
      break;
    }
    case val < 30: {
      console.log("value less than 30");
      break;
    }
    default: {
      console.log("both failed");
      break;
    }
  }
};
fn1(23);

const fn2 = (val) => {
  switch (val) {
    case 10: {
      console.log(10 * 10);
      break;
    }

    case 20: {
      console.log(20 * 10);
      break;
    }

    case 30: {
      console.log(30 * 10);
      break;
    }

    default: {
      console.log("default value");
    }
  }
};
fn2(30);

const fn3 = (value) => {
  if (value === 10) {
    console.log(10 * 10);
  } else if (value === 20) {
    console.log(20 * 20);
  } else if (value === 30) {
    console.log(30 * 30);
  } else {
    console.log("default value");
  }
};
fn3(45);

const fn4 = (num) => {
  if (num % 2 === 0) {
    console.log("it is an even number");
  } else {
    console.log("it is an odd number");
  }
};
fn4(45);

let myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(Date.now(), " now");

console.log(Math.abs(-39));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.round(4.7));
console.log(Math.min(12, 25, 36, 14, 78));
console.log(Math.max(...[14, 25, 36, 89, 77]));
console.log(Math.random(12));

setTimeout(() => {
  console.log("inside settimeout after 3s");
}, 3000);

setInterval(() => {
  console.log("inside setinterval after every 5s");
}, 5000);

function fn7() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
}
fn7();

// local and session storage
const myData = {
  name: "person",
  place: "city",
};
let stringForm = JSON.stringify(myData);
localStorage.setItem("token", myData);
localStorage.removeItem("token");
localStorage.clear();

sessionStorage.clear();
sessionStorage.setItem("token", stringForm);
sessionStorage.removeItem("token");

let localStorageData = localStorage.getItem("token");
let sessionStorageData = sessionStorage.getItem("token");
console.log(localStorageData);
console.log(sessionStorageData);

// promise and fetch
const promise = new Promise((resolve, reject) => {
  const sum = 6 + 7;
  if (sum % 2 === 0) {
    resolve("promise success");
  } else {
    reject("promise rejected");
  }
});

promise.then((message) => {
  console.log(" this is resolved ", message);
});

promise.catch((message) => {
  console.log("this is rejected ", message);
});

const p = new Promise((resolve, reject) => {
  if (5 > 100) {
    resolve("yes it is");
  } else {
    reject("it is not");
  }
});

p.then((message) => {
  console.log(message);
});

p.catch((message) => {
  console.log(message);
});

// fetch an api
const myApi = async () => {
  let url = await fetch("https://dummyjson.com/products")
    .then(async (resp) => {
      let response = await resp.json();
      console.log(response);
    })
    .catch((msg) => {
      console.log(msg);
    });
};
myApi();

// hoisting
console.log(var1, " var");
console.log(const1, "const");
console.log(let1, "let");

var var1 = 10;
let let1 = 20;
const const1 = 30;

console.log(foo());
function foo() {
  return "Hello!";
}

console.log(bar());
var bar = function () {
  return "Hello!";
};

var x = 10;
function test() {
  console.log(x);
  var x = 20;
}
test();

console.log(typeof foo);
var foo = function () {
  console.log("Hello");
};

console.log(test);
var test = 10;
function test() {}
console.log(test);

foo();
bar();

function foo() {
  console.log("foo");
}

const bar = function () {
  console.log("bar");
};

// BOM & DOM
console.log(window, "window");
console.log(window.innerHeight, "height");
console.log(window.innerWidth, " width");

let width = window.innerWidth;
if (width < 600) {
  window.prompt("less than 600px");
}
console.log("i am after alert screen");

console.log(window.location, " location");
console.log(window.navigation, " navigation");
console.log(window.history, " history");

setTimeout(() => {
  console.log("another settimeout after 5s");
}, 5000);

setInterval(() => {
  console.log("another setinterval after every 3s");
}, 3000);

window.open();

console.log(window.screen);
console.log(window.confirm("hi"));

console.dir(document);
console.log(document);

let elementsAll = document.all;
console.log(elementsAll[5]);

let selectedElement = document.getElementById("head1");
selectedElement.style.color = "blue";
selectedElement.innerText = "hello";
selectedElement.innerHTML = "<h3>Paragraph</h3>";
console.log(selectedElement);
console.log(document.getElementsByTagName("h1"));

let querySelectorEle = document.querySelector("p");
let querySelectorEleAll = document.querySelectorAll("p");
console.log(querySelectorEle);
console.log(querySelectorEleAll);

let parent = document.getElementsByClassName("secondDiv");
let newP = document.createElement("p");
newP.className = "pClass";
newP.id = "pId";
newP.style.color = "red";
newP.style.backgroundColor = "aqua";
console.log(parent, " parent");
console.log(newP, " newP");
newP.innerText = "this is new paragraph";
parent[0].appendChild(newP);

// input
let input = document.getElementById("input");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
console.log(input);

let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("mouseover", () => {
  btn.innerText = "click me";
});

btn.addEventListener("mouseout", () => {
  btn.innerText = "clicked";
});

function clicking() {
  console.log("clicked");
}

function showAlert() {
  alert("Button clicked!");
}
