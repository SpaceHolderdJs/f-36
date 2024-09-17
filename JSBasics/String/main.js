// String

const str1 = "Hello";

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Indexing

const zero = 0;

console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
console.log(str1[4]);

console.log(str1[zero]);

console.log(str1.slice(0, 4));
console.log(str1.slice(1, 3));

const name = "igor";
const nameFromCapital = name[0].toUpperCase() + name.slice(1);

console.log(nameFromCapital);

const letters = "Hello World! ";

console.log(letters.repeat(2));
console.log(name[0].repeat(100));
console.log("hello ".repeat(200));

console.log("Ford".slice(1, 3));
console.log("max".toUpperCase());

// HW

const fullname = "Igor Sergienko";

// Розрізати ім`я та прізвище та зберігти окремо за допомогою slice

// const name = ...
// const surname = ...

// вивести результат
