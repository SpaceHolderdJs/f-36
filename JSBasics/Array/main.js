// Primitives

// Object

const obj = {
  key: "values",
  key1: "values1",
};

const user1 = {
  name: "Igor",
};

const str = "hello";
console.log(new String(str));

// Indexing
const numbers = [1, 2, 3, 4, 5];
const str1 = "Hello";

// not works
str1[0] = "O";
console.log(str1, "str1");

console.log(numbers[0], "indexing");

numbers[0] = 1000;

// Good example
numbers[5] = 6;

// Bad example (will produce empty)
numbers[10] = 11;

// delete numbers[0];

numbers[0] = "Hello";

console.log(numbers, "numbers");

//

const strings = ["hello1", "hello2"];

console.log(strings[1], "indexing");

const users = [{ name: "Igor" }, { name: "Max" }];

const arrayOfArrays = [[1], [2], [3]];

console.log(numbers);
console.log(numbers.length);

console.log(strings);

// Methods

// Slice
console.log([1, 2, 3, 4].slice(1, 3), "slice");
console.log(["hello", "hello1", "hello3"].slice(-1));

// indexOf
console.log([1, 2, 3].indexOf(2), "indexOf");
console.log([1, 2, 3, 4].indexOf(10), "indexOf");

// includes
console.log([1, 2, 3, 4].includes(4), "includes");
console.log([1, 2, 3, 4].includes(100), "includes");

// Завдання
const points = [20, 1, 5, 7, 9];
// Якщо у масиві точок є точка 7 - відрізати цю точку за її індексом (indexOf)
// slice => [7]
