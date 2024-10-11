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
const charCount = {};
for (const char of string) {
  charCount[char] = charCount[char] !== undefined ? charCount[char] + 1 : 1;
}
for (const char of string) {
  if (charCount[char] === 1) console.log(char);
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
const nonZeroes = ar.filter((num) => num !== 0);
const zeroes = ar.filter((num) => num === 0);
ar = [...nonZeroes, ...zeroes];
console.log(ar);

// finding missing number
arr = [1, 2, 4, 5];
n = 5;
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
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(i, j);
    }
  }
}
