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

// task
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
console.log(sum(5,9));
