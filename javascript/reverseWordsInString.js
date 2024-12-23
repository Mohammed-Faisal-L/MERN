function reverseWordsInSentence(sentence) {
  // Split the string into words
  const words = sentence.split(" ");

  // Reverse each word
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join(""); // Reverse each word
  });

  // Join the reversed words back into a string
  return reversedWords.join(" ");
}

// Example usage
const inputString = "Reverse Words In Sentence";
const result = reverseWordsInSentence(inputString);
console.log(result); // Output: "olleH dlrow"
