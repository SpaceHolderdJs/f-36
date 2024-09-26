//  Logic operators
// < > >= <=

console.log(10 >= 9);

// ==
// ===

const a = 10;
let b = 14;

b = 15;

console.log(a == b);
console.log(100 == 200);
console.log(10 == 10);

console.log("hello" == "world");
console.log("a" == "a");

console.log(false == true);

console.log("a".includes("a"));

console.log(a === b);
console.log("a" === "a");

console.log("14" === 14);

console.log("14" == 14);

const c = "14";
//
//
//
//
//
const d = 14;

console.log(c === d);
console.log(c == d);

// Bad operators: ==, !=
// Good operators: ===, !==

if (c !== d) {
  console.log("Not Equals");
}

console.log(!true);
console.log(!false);

console.log(!"a".includes("a"));

const password = "password123";

if (password !== "password123") {
  console.log("Login failed");
}

// or(||), and (&&)

console.log(11 === 11 && 10 === 10);
console.log(10 > 9 && 8 > 7);

console.log("string" === "string1" && 10 > 9);

if (10 > 9 && 0 < 1) {
  console.log("Works");
}

console.log(10 > 9 || 7 < 6);

if (password.includes("9") || password.includes("x")) {
  console.log("OR");
}

const anotherCheck = 10 < 9 && 8 > 7;

const isPasswordValid =
  password.includes("b") || password.includes("m") || anotherCheck;

if (isPasswordValid) {
  console.log("Password is valid");
}

// Завдання:
//

const userPassword = "passwoerd1122233";

// перевірити що у пароля наявна:
// Хоча б одна цифра 1
// Літера о
// Довжина паролю більше за 6

// Якщо всі перевірки правдиві - вивести пароль у консоль

// Client (Browser)
// Node.js

const c1 = 100;
const c2 = 1;
const c3 = 0;

// Falsy

console.log(!!c2);

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean(60));
