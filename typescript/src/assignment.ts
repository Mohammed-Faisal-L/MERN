// Remove duplicate values from array
let array: number[] = [12, 12, 11, 55, 0, 99, 62, 62, 21];
array = array.filter((value, index) => array.indexOf(value) === index);
console.log(array);

// Check whether string is palindrome
const isPalindrome = (str: string): boolean =>
  str === str.split("").reverse().join("");
console.log(isPalindrome("akash") ? "yes" : "no");

// Fibonacci series
const fibonacci = (n: number): number[] => {
  const fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
  return fib;
};
console.log(fibonacci(5));

// Largest number in array
const maxValue =
  array.length > 0
    ? array.reduce((max, current) => (current > max ? current : max), array[0])
    : "Array is empty";
console.log(maxValue);

// FizzBuzz logic
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// Reverse digits of integer
const reverseInteger = (num: number): number => {
  const isNegative = num < 0; // Check if the number is negative
  const absValue = isNegative ? -num : num; // Get the absolute value
  const reversed = parseInt(
    absValue.toString().split("").reverse().join(""),
    10
  );
  return isNegative ? -reversed : reversed; // Restore the negative sign if necessary
};
console.log(reverseInteger(-923)); // Output: -329

// Check for anagrams
const areAnagrams = (str1: string, str2: string): boolean => {
  const format = (str: string): string => str.split("").sort().join("");
  return format(str1) === format(str2);
};
console.log(areAnagrams("listen", "silent") ? "yes" : "no");

// First non-repeating character
const firstNonRepeatingChar = (str: string): string | null => {
  for (const char of str) {
    if (str.split(char).length - 1 === 1) return char;
  }
  return null;
};
console.log(firstNonRepeatingChar("call"), "non-repeating");

// Sum of nested array elements
const nestedArray: number[][] = [
  [12, 12, 3],
  [1, 2],
];
const sum: number = nestedArray.reduce(
  (total, subArray) =>
    total + subArray.reduce((subTotal, num) => subTotal + num, 0),
  0
);
console.log(sum);

// Move all zeroes to end of the array
let ar: number[] = [12, 1, 0, 0, 0, 1, 1, 1];
ar = [...ar.filter((num) => num !== 0), ...ar.filter((num) => num === 0)];
console.log(ar);

// Finding missing number
const findMissingNumber = (arr: number[], n: number): number => {
  const expectedSum: number = (n * (n + 1)) / 2;
  const actualSum: number = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};
console.log(findMissingNumber([1, 2, 4, 5], 5));

// Flatten array
const flattenArray = (arr: (number | number[])[]): number[] =>
  arr.reduce<number[]>(
    (flat, item) => flat.concat(item as number | number[]),
    []
  );
console.log(flattenArray([1, [2, 3, 4], 5])); // Output: [1, 2, 3, 4, 5]

// Find longest word in a sentence
const findLongestWord = (sentence: string): string =>
  sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Find indices of two numbers that sum to target
const findIndices = (arr: number[], target: number): number[] => {
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    const complementIndex = arr.indexOf(complement);
    if (complementIndex !== -1 && complementIndex !== i)
      return [i, complementIndex];
  }
  return [];
};
console.log(findIndices([2, 7, 11, 15], 9));

// Check number of vowels in the given string
const countVowels = (str: string): number => {
  const vowelRegex = /[aeiou]/gi; // Regular expression to match vowels
  const matches = str.match(vowelRegex); // Find all vowels
  return matches ? matches.length : 0; // Return the count or 0 if no vowels
};
console.log("Number of vowels are", countVowels("listen")); // Output: 2
