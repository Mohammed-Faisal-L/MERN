let array = [1, 2, 5, [3, 4], [5, [9, 5]]];
let flattenedArray = array.flat(Infinity);
let set = new Set(flattenedArray);
let result = Array.from(set);

let sortedArray = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];
sortedArray = sortedArray.sort((a, b) => a - b);
const frequency = sortedArray.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const frequencyArray = Object.entries(frequency);
frequencyArray.sort((a, b) => {
  return b[1] === a[1] ? a[0] - b[0] : b[1] - a[1];
});
const secondMostFrequency = frequencyArray[1];

const input = [
  { id: 1, value: 20 },
  { id: 2, value: 25 },
  { id: 3, value: 2 },
  { id: 1, value: 4 },
  { id: 2, value: 6 },
];
result = input.reduce((acc, cur) => {
  const existing = acc.find((item) => item.id === cur.id);

  existing
    ? (existing.value += cur.value)
    : acc.push({ id: cur.id, value: cur.value });

  return acc;
}, []);

const arr = ["name", "name", "id", "name", "id"];
result = arr.reduce((acc, cur) => {
  acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
  return acc;
}, []);
const finalResult = Object.entries(result).map(([key, value]) => ({
  [key]: value,
}));
console.log(finalResult);

const ar = [
  { name: "a", id: 1, item: "tttt", count: 5 },
  { name: "a", id: 1, item: "uuuu", count: 2 },
  { name: "b", id: 2, item: "zzzz", count: 6 },
];
result = ar.reduce((acc, curr) => {
  const existing = acc.find(
    (item) => item.name === curr.name && item.id === curr.id
  );

  if (existing) {
    existing.item.push(curr.item);
    existing.count.push(curr.count);
  } else {
    acc.push({
      name: curr.name,
      id: curr.id,
      item: [curr.item],
      count: [curr.count],
    });
  }

  return acc;
}, []);

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true

function reverseString(str) {
  let reversed = ""; // Initialize an empty string to store the reversed string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Append characters from the end to the new string
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

const students = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Alice", age: 22 },
  { id: 3, name: "Bob", age: 19 },
  { id: 4, name: "Zara", age: 21 },
];
students.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1; // a comes before b
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1; // a comes after b
  return 0; // names are equal
});
console.log(students);

function slidingWindowAverage(array, window) {
  const result = []; // To store the averages
  for (let i = 0; i < array.length; i += window) {
    // Slice a subarray of size 'window'
    const subArray = array.slice(i, i + window);

    // Calculate the average
    const average =
      subArray.reduce((sum, num) => sum + num, 0) / subArray.length;

    // Push the average to the result array
    result.push(average);
  }
  return result;
}
// Example usage:
array = [1, 2, 3, 5, 8, 7, 6, 4, 2];
console.log(slidingWindowAverage(array, 3)); // [2, 6.666666666666667, 4]
console.log(slidingWindowAverage(array, 2)); // [1.5, 4, 7.5, 5, 2]

let arrObjects = [
  { a: 10, b: 20, c: 30 },
  { d: 20, a: 10, c: 30 },
];
// Use reduce to aggregate the values
result = [
  arrObjects.reduce((acc, curr) => {
    // Iterate through each key in the current object
    for (let key in curr) {
      // Add the value to the existing key in acc or initialize it
      acc[key] = (acc[key] || 0) + curr[key];
    }
    return acc;
  }, {}),
];
console.log(result);

array = [1, 2, 3, 4];
const keyValueResult = array.reduce((obj, val, index) => {
  if (index < array.length - 1) obj[val] = array[index + 1];
  return obj;
}, {});
console.log("6. Key-Value Pairs:", keyValueResult);

const data = ["John", 30, "Developer", 5];
const keys = ["name", "age", "occupation", "experience"];
const backendData = data.reduce((obj, value, index) => {
  obj[keys[index]] = value;
  return obj;
}, {});
console.log("7. Backend Data:", backendData);
// Output: { name: "John", age: 30, occupation: "Developer", experience: 5 }

arr = ["Something", 26, "Nothing", "Waiting"];
const predefinedKeys = ["name", "age", "occupation", "experience"];
const formattedResult = arr.reduce((obj, value, index) => {
  obj[predefinedKeys[index]] = value;
  return obj;
}, {});
console.log("11. Predefined Object:", formattedResult);
// Output: { name: "Something", age: 26, occupation: "Nothing", experience: "Waiting" }

const arrKeyValue = [0, 1, 2, 3];
const keyValueObject = arrKeyValue.reduce((obj, value) => {
  obj[value] = value;
  return obj;
}, {});
console.log("12. Array to Key-Value Object:", keyValueObject);
// Output: { 0: 0, 1: 1, 2: 2, 3: 3 }
