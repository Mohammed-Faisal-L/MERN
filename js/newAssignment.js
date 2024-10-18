// converting kilometer to miles and celsius to fahrenheit
let km = 1;
let miles = km / 1.61;
console.log(km, " km");
console.log(miles, " miles");

let celsius = 20;
let fahrenheit = celsius * (9 / 5) + 32;
console.log(celsius, " C");
console.log(fahrenheit, " F");

// check whether number is positive negative or zero
let number = 45;
if (number > 0) {
  console.log(number, " is a positive number.");
} else if (number < 0) {
  console.log(number, " is a negative number.");
} else {
  console.log("The Number is Zero.");
}

// Generating a Random Number
randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber, " as randomly number generated.");

// Check whether the number is odd or even and Check whether the number is a prime number
number = 46;
console.log(
  number % 2 == 0 ? number + " is an Even Number" : number + " is an Odd Number"
);

number = 7;
let count = 0;
for (let i = 2; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}

console.log(
  count == 1 ? number + " is a Prime Number" : number + " is not a Prime Number"
);

// Find largest among three numbers
let a = 6;
let b = 7;
let c = 8;
if (a > b) {
  console.log(a, " is a greater number.");
} else if (b > c) {
  console.log(b, " is a greater number.");
} else {
  console.log(c, " is a greater number.");
}

// Finding Factorial of a given number
number = 5;
let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(number, "! =", fact);

// Finding Armstrong number in any interval
function checkArmstrongNumber(number) {
  let numberString = number.toString();
  let numberOfDigits = numberString.length;
  let sum = 0;

  for (let i = 0; i < numberOfDigits; i++) {
    let digit = parseInt(numberString[i]);
    let digitValue = 1;

    for (let i = 1; i <= numberOfDigits; i++) {
      digitValue = digitValue * digit;
    }

    sum = sum + digitValue;
  }

  if (sum == number) {
    console.log(number, " is an Armstrong Number.");
  }
}

for (let i = 100; i <= 200; i++) {
  checkArmstrongNumber(i);
}

// Finding if numbers have the same last digit
let num1 = 12345;
let num2 = 12340;

let checkLastDigit =
  num1 % 10 == num2 % 10
    ? "Both numbers have the same last digit."
    : "Both numbers do not have the same last digit.";
console.log(checkLastDigit);

// Checking for Palindrome of a number and string
let string = "malayalam";
let reversedString = string.split("").reverse().join("");
console.log(
  string === reversedString
    ? string + " is a Palindrome."
    : string + " is not a Palindrome."
);

number = 12322;
let temp = number;
let reversedNumber = 0;
while (number !== 0) {
  let reminder = number % 10;
  reversedNumber = reversedNumber * 10 + reminder;
  number = Math.trunc(number / 10);
}

console.log(
  temp == reversedNumber
    ? temp + " is a Palindrome."
    : temp + " is not a Palindrome."
);

// Find factors of a number
number = 75;
for (let i = 2; i < number / 2; i++) {
  if (number % i == 0) {
    console.log(i, " is a factor of ", number);
  }
}
console.log(
  "1 and the number itself not included in the logic to find factors of the number."
);

// Printing fibonacci sequence
number = 10;
let fibo = [0, 1];
for (let i = 2; i < number; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log("fibonacci series => ", fibo);

// Replacing characters of a string
string = "My name is Faisal";
let newString = string.split(" ").join("-");
console.log(string);
console.log(newString);

// Reverse character of a string
string = "apple";
newString = "";
for (const char of string) {
  newString += char;
}
console.log(string);
console.log(newString);

// Sorting words in alphabetical order
string = 'I Am Sorting Words In The Alphabetical Order'
newString = string.split(' ').sort().join(' ');
console.log(string);
console.log(newString);
