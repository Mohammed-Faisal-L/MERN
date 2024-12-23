var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Remove duplicate values from array
var array = [12, 12, 11, 55, 0, 99, 62, 62, 21];
array = array.filter(function (value, index) { return array.indexOf(value) === index; });
console.log(array);
// Check whether string is palindrome
var isPalindrome = function (str) {
    return str === str.split("").reverse().join("");
};
console.log(isPalindrome("akash") ? "yes" : "no");
// Fibonacci series
var fibonacci = function (n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++)
        fib.push(fib[i - 1] + fib[i - 2]);
    return fib;
};
console.log(fibonacci(5));
// Largest number in array
var maxValue = array.length > 0
    ? array.reduce(function (max, current) { return (current > max ? current : max); }, array[0])
    : "Array is empty";
console.log(maxValue);
// FizzBuzz logic
for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
}
// Reverse digits of integer
var reverseInteger = function (num) {
    var isNegative = num < 0; // Check if the number is negative
    var absValue = isNegative ? -num : num; // Get the absolute value
    var reversed = parseInt(absValue.toString().split("").reverse().join(""), 10);
    return isNegative ? -reversed : reversed; // Restore the negative sign if necessary
};
console.log(reverseInteger(-923)); // Output: -329
// Check for anagrams
var areAnagrams = function (str1, str2) {
    var format = function (str) { return str.split("").sort().join(""); };
    return format(str1) === format(str2);
};
console.log(areAnagrams("listen", "silent") ? "yes" : "no");
// First non-repeating character
var firstNonRepeatingChar = function (str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (str.split(char).length - 1 === 1)
            return char;
    }
    return null;
};
console.log(firstNonRepeatingChar("call"), "non-repeating");
// Sum of nested array elements
var nestedArray = [
    [12, 12, 3],
    [1, 2],
];
var sum = nestedArray.reduce(function (total, subArray) {
    return total + subArray.reduce(function (subTotal, num) { return subTotal + num; }, 0);
}, 0);
console.log(sum);
// Move all zeroes to end of the array
var ar = [12, 1, 0, 0, 0, 1, 1, 1];
ar = __spreadArray(__spreadArray([], ar.filter(function (num) { return num !== 0; }), true), ar.filter(function (num) { return num === 0; }), true);
console.log(ar);
// Finding missing number
var findMissingNumber = function (arr, n) {
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = arr.reduce(function (sum, num) { return sum + num; }, 0);
    return expectedSum - actualSum;
};
console.log(findMissingNumber([1, 2, 4, 5], 5));
// Flatten array
var flattenArray = function (arr) {
    return arr.reduce(function (flat, item) { return flat.concat(item); }, []);
};
console.log(flattenArray([1, [2, 3, 4], 5])); // Output: [1, 2, 3, 4, 5]
// Find longest word in a sentence
var findLongestWord = function (sentence) {
    return sentence
        .split(" ")
        .reduce(function (longest, word) { return (word.length > longest.length ? word : longest); }, "");
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// Find indices of two numbers that sum to target
var findIndices = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        var complement = target - arr[i];
        var complementIndex = arr.indexOf(complement);
        if (complementIndex !== -1 && complementIndex !== i)
            return [i, complementIndex];
    }
    return [];
};
console.log(findIndices([2, 7, 11, 15], 9));
// Check number of vowels in the given string
var countVowels = function (str) {
    var vowelRegex = /[aeiou]/gi; // Regular expression to match vowels
    var matches = str.match(vowelRegex); // Find all vowels
    return matches ? matches.length : 0; // Return the count or 0 if no vowels
};
console.log("Number of vowels are", countVowels("listen")); // Output: 2
