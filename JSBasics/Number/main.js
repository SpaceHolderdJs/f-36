// NaN
// Infinity
// Number

const number = new Number(10);
const number2 = 90;

const number3 = 12.85895002;

console.log(number);

console.log(number2.toString());
console.log(`${number2}`);
console.log(number3.toFixed(1));
console.log(number3.toFixed(0));

console.log(number3.toPrecision(19));

// console.log(number2.valueOf());
// console.log("hello".valueOf());
// console.log(number2.)

// NaN - Not A Number
const number4 = 100;
const value = "7 7";

if (Boolean(value) && !isNaN(+value)) {
  const number5 = Number(value);
  console.log(isNaN(number4));
  console.log(number5);
}

// Infinity
console.log(-Infinity, Infinity);
console.log(Infinity - Infinity);
console.log(Infinity + Infinity);

console.log(Infinity * Infinity);
console.log(Infinity / Infinity);

console.log(+"90" * Number("hello"));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(Infinity, -Infinity);

console.log("10" + 10);
console.log("Hello" + "world");
console.log("10" - 10);
console.log("Hello" - "world");

console.log(10 + "10");
console.log(10 - "10");

console.log("10" * 10);
console.log(10 * "10");

console.log("10" / 10);

console.log(null + 10);
// 10

console.log(undefined + 10);
// NaN

console.log(new Number(10));
console.log(new String("string"));

console.log(Number.prototype);

// Number.prototype.isBiggerThanTen = function () {
//   return this > 10;
// };

// const number6 = 8;
// console.log(number6.isBiggerThanTen());

// Number.prototype.toString = function () {
//   return "-_-";
// };

// const number7 = 100;
// console.log(number7.toString());

// class MyNumber extends Number {
//   isBiggerThanTen() {
//     return this > 10;
//   }
// }

// const myN = new MyNumber(10);
// console.log(myN.isBiggerThanTen());

// console.log(new Number(100).isBiggerThanTen());

console.log(false + 10);
// 10
console.log(true + 10);
// 11

console.log(true * 10);
console.log(false * 10);

console.log(true / 10);
console.log(10 / false);

// Infinity, NaN

console.log(
  10000000 *
    10000000 *
    1000000 *
    100000 *
    100000 *
    10000 *
    100000 *
    10000 *
    1000 *
    1000 *
    100 *
    1000000000000000000000000000000000000000000000000000000000000000000000000000000000
);

// Special calculative operators

let n = 0;

n = n + 1;
n += 100000;
n++;
++n;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(n);

n = n - 1;
n -= 1;
n--;
--n;

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

console.log(n);

n = n * 2;
n *= 2;

console.log(10 ** 2 + 90);

console.log(n);

n = n / 10;
n /= 10;

console.log(n);

const n1 = -1;
// Module
console.log(Math.abs(n1));
console.log(Math.abs(0));

// To the least
console.log(Math.floor(0.98431));

// Removes part after .
console.log(Math.trunc(1.8000101));

// Random
console.log(Math.floor(Math.random() * 5));
console.log(Math.random());

// Задача
// Написати логіку, яка буде взводити число l у степінь m

let l = 10;
let m = 5;

let result = 10;

for (let i = 0; i < m - 1; i++) {
  result = result * l;
}

console.log(result, "result");

// використайте цикл (for (i))

// Задача
// Написати логіку, яка вгадує число від 1 до 10

let num = 9;

// Math.random();

// вивести число, якщо його вгадав JavaScript

const powed = Math.pow(l, m);
console.log(powed, "power");

console.log(Math.pow(3, NaN));

console.log(10 + Math.pow(2, 4));

console.log(Math.max(8, 3, 5, 10, 9, 2), "max");
console.log(Math.max(80, 4, 2, 2, 1, 1));

console.log(Math.min(90, 202, 1), "min");

const date1 = "02.06.2021";
const date2 = "01.12.2099";
const date3 = "07.02.1999";
const date4 = "06.12.1991";
const date5 = "09.11.1999";
const date6 = "09.11.2050";

const allDates = `${date1}:${date2}:${date3}:${date4}:${date5}:${date6}`;
("07.02.1999:08.07.2000:02.06.2001");

// Завдання
// Знайти найстаршу та наймолодшу дату

let maxDate = "";
let minDate = date1;

let maxYear = 0;
let minYear = Infinity;

let maxMonth = 0;
let minMonth = Infinity;

let maxDay = 0;
let minDay = Infinity;

// Calculation of all the dates
let datesQuantity = 1;

for (const symbol of allDates) {
  if (symbol === ":") {
    datesQuantity++;
  }
}

console.log(datesQuantity, "datesQuantity");

const step = date1.length;

// Iteration for each date and analytics of values
for (let i = 0; i < datesQuantity; i++) {
  const currentPosition = i * step + i;
  const currentDate = allDates.slice(currentPosition, currentPosition + step);

  const date = +currentDate.slice(0, 2);
  const month = +currentDate.slice(3, 5);
  const year = +currentDate.slice(-4);

  if (maxYear < year) {
    console.log("year", year);
    maxYear = year;
    maxDate = currentDate;
  } else if (maxMonth < month && maxYear <= year) {
    // if years are same
    console.log("month", month);
    maxMonth = month;
    maxDate = currentDate;
  } else if (maxDay < date && maxMonth <= month && maxYear <= year) {
    // if months are same
    console.log("day", date);
    maxDay = date;
    maxDate = currentDate;
  }
}

console.log(maxYear, "maxYear");
console.log(maxMonth, "maxMonth");
console.log(maxDay, "maxDate");

console.log(maxDate);
