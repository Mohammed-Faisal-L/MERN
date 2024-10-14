// remove duplicate values from array
let array = [12, 12, 11, 55, 0, 99, 62, 62, 21];
console.log(array);
let newArray = new Set(array);
array = [...newArray];
console.log(array);

// check whether string is palindrome or not
let string = "faisal";
let split = string.split("");
console.log(split);
let reverse = split.reverse();
let join = reverse.join("");

isPalindrome = string === join ? "yes" : "no";
console.log(isPalindrome);

// fibonacci series
let fib = [0, 1];
let n = 5;
for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

// largest number in array
let largest = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest, " largest"); // Math.max(...arr);

// fizzbuzz logic
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// reverse digits of integer
let num = -923;
const sign = Math.sign(num);
let abs = Math.abs(num);
console.log(abs);
let tostring = abs.toString();
console.log(toString);
split = tostring.split("");
console.log(split);
reverse = split.reverse();
console.log(reverse);
join = reverse.join("");
console.log(join);
let result = sign * parseInt(join);
console.log(result);

// check for anagrams
string = "listen";
function checkAnagram(string) {
  split = string.split("");
  console.log(split);
  sort = split.sort();
  console.log(sort);
  join = sort.join("");
  console.log(join);
  return join;
}
let str1 = checkAnagram("listen");
let str2 = checkAnagram("silent");
result = str1 === str2 ? "yes" : "no";
console.log(result);

// first non repeating character
string = "call";
let sArray = string.split("");
for (let i = 0; i < sArray.length; i++) {
  let count = 0;
  for (let j = 0; j < sArray.length; j++) {
    if (sArray[i] === sArray[j]) count++;
  }
  if (count == 1) console.log(sArray[i] + " non repeating");
}

// sum of nested array elements
let nestedArray = [
  [12, 12, 3],
  [1, 2],
];
array = nestedArray.flat();
let sum = array.reduce((sum, num) => sum + num, 0);
console.log(sum);

// move all zeroes to end of the array
let ar = [12, 1, 0, 0, 0, 1, 1, 1];
const nonZeroes = [];
const zeroes = [];
for (const num of ar) {
  if (num !== 0) nonZeroes.push(num);
  else zeroes.push(num);
}
ar = [...nonZeroes, ...zeroes];
console.log(ar);

// finding missing number
arr = [1, 2, 4, 5];
n = arr.length + 1;
const expectedSum = (n * (n + 1)) / 2;
const actualSum = arr.reduce((sum, num) => sum + num, 0);
console.log(expectedSum - actualSum);

// flatten array
arr = [1, [2, 3, 4], 5];
arr = arr.flat();
console.log(arr);

// find longest word in a sentence
let str = "The quick brown fox jumped over the lazy dog";
str = str
  .split(" ")
  .reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
console.log(str);

// find indices of two numbers that sum to match the target number
arr = [2, 7, 11, 15];
let target = 9;
for (let i = 0; i < arr.length; i++) 
  for (let j = 0; j < arr.length; j++) 
    if (arr[i] + arr[j] === target) 
      console.log(i, j);

// check number of vowels in the given string
let s = "listen";
let sSplit = s.split("");
let count = 0;
for (let char of sSplit) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  )
    count++;
}
console.log(" number of vowels are ", count);
