//  Array Methods
// 1. push(element1, ..., elementN)
//    - Params: One or more elements to add to the array.
//    - Returns: The new length of the array.
//    -original array is modified

// 2. pop()
//    - Params: None.
//    - Returns: The removed element (the last element of the array).

// 3. shift()
//    - Params: None.
//    - Returns: The removed element (the first element of the array).

// 4. unshift(element1, ..., elementN)
//    - Params: One or more elements to add to the array.
//    - Returns: The new length of the array.

// 5. concat(array2, ..., arrayN)
//    - Params: One or more arrays or values to concatenate.
//    - Returns: A new array.

// 6. slice(start, end)
//    - Params:
//      - start (index to begin extraction).
//      - end (index to end extraction, non-inclusive).
//    - Returns: A new array with selected elements.

// 7. splice(start, deleteCount, item1, ..., itemN)
//    - Params:
//      - start (index to start changing the array).
//      - deleteCount (number of elements to remove).
//      - item1, ..., itemN (optional, elements to add).
//    - Returns: An array of removed elements.

// 8. forEach(callback(element, index, array))
//    - Params: A callback function executed for each element.
//    - Returns: undefined.

// 9. map(callback(element, index, array))
//    - Params: A callback function executed for each element.
//    - Returns: A new array with results from calling the function.

// 10. filter(callback(element, index, array))
//     - Params: A callback function that returns true for elements to keep.
//     - Returns: A new array with elements that pass the test.

// 11. reduce(callback(accumulator, element, index, array), initialValue)
//     - Params:
//       - callback function executed on each element.
//       - initialValue (optional, initial value for the accumulator).
//     - Returns: The single accumulated value.

// 12. reduceRight(callback(accumulator, element, index, array), initialValue)
//     - Same as reduce(), but starts from the rightmost element.

// 13. find(callback(element, index, array))
//     - Params: A callback function that returns true for the desired element.
//     - Returns: The first element that satisfies the condition or undefined.

// 14. findIndex(callback(element, index, array))
//     - Params: A callback function that returns true for the desired element.
//     - Returns: The index of the first element that satisfies the condition or -1.

// 15. every(callback(element, index, array))
//     - Params: A callback function that checks if all elements pass the test.
//     - Returns: true if all elements pass, otherwise false.

// 16. some(callback(element, index, array))
//     - Params: A callback function that checks if at least one element passes the test.
//     - Returns: true if at least one element passes, otherwise false.

// 17. includes(value, start)
//     - Params:
//       - value (element to search for).
//       - start (optional, index to start searching from, default is 0).
//     - Returns: true if the value is found, otherwise false.

// 18. indexOf(value, start)
//     - Params:
//       - value (element to search for).
//       - start (optional, index to start searching from, default is 0).
//     - Returns: The index of the element or -1 if not found.

// 19. lastIndexOf(value, start)
//     - Params:
//       - value (element to search for).
//       - start (optional, index to start searching backward from).
//     - Returns: The last index of the element or -1 if not found.

// 20. join(separator)
//     - Params: separator (optional, string to separate each element, default is a comma).
//     - Returns: A string with all array elements joined.

// 21. reverse()
//     - Params: None.
//     - Returns: The reversed array.

// 22. sort(compareFunction)
//     - Params: compareFunction (optional, specifies a function to determine the sort order).
//     - Returns: The sorted array.

// 23. flat(depth)
//     - Params: depth (optional, how deep to flatten nested arrays, default is 1).
//     - Returns: A new flattened array.

// 24. flatMap(callback(element, index, array))
//     - Params: A callback function, similar to map().
//     - Returns: A new array that is mapped and flattened.

// 25. Array.from(arrayLike, mapFunction)
//     - Params:
//       - arrayLike (an array-like or iterable object).
//       - mapFunction (optional, a map function to call on each element).
//     - Returns: A new array.

// 26. Array.isArray(value)
//     - Params: value (the value to check).
//     - Returns: true if the value is an array, otherwise false.

// 27. fill(value, start, end)
//     - Params:
//       - value (the value to fill the array with).
//       - start (optional, start index, default is 0).
//       - end (optional, end index, default is array length).
//     - Returns: The modified array.

// ---

//  Object Methods
// 1. Object.keys(object)
//    - Params: object (the object to extract keys from).
//    - Returns: An array of the object's keys.

// 2. Object.values(object)
//    - Params: object (the object to extract values from).
//    - Returns: An array of the object's values.

// 3. Object.entries(object)
//    - Params: object (the object to extract key-value pairs from).
//    - Returns: An array of key-value pairs.

// 4. Object.assign(target, ...sources)
//    - Params:
//      - target (the target object).
//      - sources (one or more source objects).
//    - Returns: The modified target object.

// 5. Object.freeze(object)
//    - Params: object (the object to freeze).
//    - Returns: The frozen object.

// 6. Object.seal(object)
//    - Params: object (the object to seal).
//    - Returns: The sealed object.

// 7. Object.create(prototype, properties)
//    - Params:
//      - prototype (the object to use as the prototype).
//      - properties (optional, property descriptors).
//    - Returns: A new object.

// 8. Object.defineProperty(object, property, descriptor)
//    - Params:
//      - object (the object to define the property on).
//      - property (the name of the property).
//      - descriptor (the property descriptor).
//    - Returns: The object.

// 9. Object.defineProperties(object, descriptors)
//    - Params:
//      - object (the object to define the properties on).
//      - descriptors (an object with property descriptors).
//    - Returns: The object.

// 10. Object.getOwnPropertyNames(object)
//     - Params: object (the object to get property names from).
//     - Returns: An array of property names.

// 11. Object.getPrototypeOf(object)
//     - Params: object (the object to get the prototype from).
//     - Returns: The prototype of the object.

// 12. Object.setPrototypeOf(object, prototype)
//     - Params:
//       - object (the object to set the prototype for).
//       - prototype (the new prototype).
//     - Returns: The object.

// 13. Object.hasOwnProperty(property)
//     - Params: property (the property to check).
//     - Returns: true if the object has the property as its own, otherwise false.

// 14. Object.is(value1, value2)
//     - Params:
//       - value1 (the first value).
//       - value2 (the second value).
//     - Returns: true if the values are the same, otherwise false.

// 15. Object.isFrozen(object)
//     - Params: object (the object to check).
//     - Returns: true if the object is frozen, otherwise false.

// 16. Object.isSealed(object)
//     - Params: object (the object to check).
//     - Returns: true if

// 17. Object.preventExtensions(object)
//     - Params: object (the object to prevent extensions on).
//     - Returns: The object.

// 18. Object.isExtensible(object)
//     - Params: object (the object to check).
//     - Returns: true if the object can be extended, otherwise false.

//  String Methods
// 1. charAt(index)
//    - Params: index (the position to retrieve the character from).
//    - Returns: A string representing the character at the given index.

// 2. charCodeAt(index)
//    - Params: index (the position to retrieve the character code from).
//    - Returns: The Unicode code point of the character at the given index.

// 3. concat(string2, ..., stringN)
//    - Params: One or more strings to concatenate.
//    - Returns: A new concatenated string.

// 4. includes(substring, start)
//    - Params:
//      - substring (the string to search for).
//      - start (optional, position to start searching from, default is 0).
//    - Returns: true if the substring is found, otherwise false.

// 5. endsWith(substring, length)
//    - Params:
//      - substring (the string to search for).
//      - length (optional, considered length of the string to match).
//    - Returns: true if the string ends with the given substring, otherwise false.

// 6. indexOf(substring, start)
//    - Params:
//      - substring (the string to search for).
//      - start (optional, position to start searching from, default is 0).
//    - Returns: The index of the first occurrence of the substring, or -1 if not found.

// 7. lastIndexOf(substring, start)
//    - Params:
//      - substring (the string to search for).
//      - start (optional, position to search backward from).
//    - Returns: The index of the last occurrence of the substring, or -1 if not found.

// 8. match(regexp)
//    - Params: regexp (the regular expression to match).
//    - Returns: An array of matched substrings or null if no match is found.

// 9. replace(searchValue, newValue)
//    - Params:
//      - searchValue (string or regular expression to replace).
//      - newValue (the replacement string or function).
//    - Returns: A new string with the replacements.

// 10. replaceAll(searchValue, newValue)
//     - Same as replace(), but replaces all occurrences.

// 11. slice(start, end)
//     - Params:
//       - start (index to start extraction).
//       - end (optional, index to end extraction, non-inclusive).
//     - Returns: A new string.

// 12. split(separator, limit)
//     - Params:
//       - separator (string or regular expression to split the string by).
//       - limit (optional, limit on the number of splits).
//     - Returns: An array of substrings.

// 13. startsWith(substring, start)
//     - Params:
//       - substring (string to check for).
//       - start (optional, position to start checking from).
//     - Returns: true if the string starts with the substring, otherwise false.

// 14. substring(start, end)
//     - Params:
//       - start (index to start extraction).
//       - end (optional, index to end extraction, non-inclusive).
//     - Returns: A new string.

// 15. toLowerCase()
//     - Params: None.
//     - Returns: A new string with all characters converted to lowercase.

// 16. toUpperCase()
//     - Params: None.
//     - Returns: A new string with all characters converted to uppercase.

// 17. trim()
//     - Params: None.
//     - Returns: A new string with leading and trailing whitespace removed.

// 18. trimStart()
//     - Params: None.
//     - Returns: A new string with leading whitespace removed.

// 19. trimEnd()
//     - Params: None.
//     - Returns: A new string with trailing whitespace removed.

// 20. padStart(targetLength, padString)
//     - Params:
//       - targetLength (length of the resulting string after padding).
//       - padString (optional, string to pad with, default is space).
//     - Returns: A new string padded at the start.

// 21. padEnd(targetLength, padString)
//     - Same as padStart(), but pads at the end.

// 22. repeat(count)
//     - Params: count (the number of times to repeat the string).
//     - Returns: A new string with the repeated content.

// 23. toString()
//     - Params: None.
//     - Returns: The string representation of the object.

// 24. valueOf()
//     - Params: None.
//     - Returns: The primitive value of the string object.
