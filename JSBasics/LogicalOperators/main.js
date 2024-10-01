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

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean({}));
// console.log(Boolean(60));

const userPassword1 = "passwoerd1122233";

// перевірити що у пароля наявна:
// Хоча б одна цифра 1
// Літера о
// Довжина паролю більше за 6

const check1 = userPassword1.includes("1");
const check2 = userPassword1.includes("o");
const check3 = userPassword1.length > 6;

const finalCheck = check1 && check2 && check3;

if (finalCheck) {
  console.log(userPassword1);
}

// >, <, <=, <=, ||, &&, !, ==, ===

// Falsy
// 0, undefined, null, false, ""

const check = 0;

// True-like
// true, numbers (but not 0), strings (but not empty (""), {}, [])

if (check) {
  console.log("Check passed");
}

console.log(Boolean(check));
console.log(Boolean(0));
console.log(Boolean(1));

console.log(!!"");
console.log(!!500);
console.log(!!true);
console.log(false || !!check);

console.log(!Boolean());

if (Boolean(check) || !Boolean(check)) {
  console.log("!!!!");
}

const userName = "";
const balance = 0;
const count = balance + 10;

console.log(
  `Hello, ${userName || "Unknow User"} ${count || 0} ${"" || "hello"}`
);

// if (10 < 11) {
//   console.log("11");
// }

10 < 11 && false && console.log("11");

// Ternar operator
console.log(11 - 5 === 5 ? "5" : ":(");

const value = "I";

const userName2 = Boolean(value) ? value : "Unkown User";
const userName3 = value || "Unknown User";
console.log(userName2, userName3);

// Завдання:
// 1.
const users = "Oleg, Max,Vika, Alina Igor"
  .replaceAll(", ", ",")
  .replaceAll(" ", ",");

console.log(users, "users");

// Вивести "a lot" якщо користувачів більше за 3
// якщо ні - вивести "a few"

let count1 = 0;

for (const char of users) {
  char === "," && count1++;
}
console.log(count1);
console.log(count1 + 1 > 3 ? "a lot" : "a few");

// switch

const role = "admin";

switch (role) {
  case "admin": {
    console.log("This is Admin!");
    break;
  }

  case "user": {
    console.log("This is User!");
    break;
  }

  case "anonim": {
    console.log("This is Anonim!");
    break;
  }

  default: {
    console.log("This is Unknown User!");
    break;
  }
}

//  Завдання:
let count = 5;
let iterations = 7;

// написати цикл, який має збільшити count на 1 iterations разів
// for(let i = 0; i < iterations; i = i + 2)
// якщо count після змін більший за 10 - вивести "too much" - якщо ні - вивести "not enough"
// ternar ? :

// Завдання

const name = "Igor";

// Написати switch під 3 імені (Alina, Egor, Max)
// Виводьте name в кожному кейсі

const specialSymbols = "!@#$%^&*_?";
