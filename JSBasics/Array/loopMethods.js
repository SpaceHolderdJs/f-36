// map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const strings = [];

for (const number of numbers) {
  strings[strings.length] = number.toString();
}

console.log(strings);

console.log(numbers.join("").split(""));

console.log(numbers.map((number) => number.toString()));

const users = [
  { email: "email1@gmail.com" },
  { email: "email2@gmail.com" },
  { email: "email3@gmail.com" },
];

const usersEmails = users.map((user) => user.email);
console.log(users, usersEmails);

users.map((user) => {
  console.log(user.email);

  return user.email;
});
// .forEach((email) => console.log(email));

// Завдання
const numsAsStrings = ["1112121212", "241", "359", "12", "10"];

// написати логіку, яка трансформує масив у вигляд
// кожен елемент - сума його цифр (map)
[2, 6, 8, 3, 1];

console.log(numsAsStrings.map((num) => Number(num[0]) + Number(num[1])));
console.log(
  numsAsStrings.map((num) => {
    const [n1, n2] = num;
    return Number(n1) + Number(n2);
  })
);

// console.log(
//   numsAsStrings.map((num) =>
//     num.split("").reduce((sum, e) => (sum += Number(e)), 0)
//   )
// );

[1, 2, 3, 4, 5].forEach((n) => console.log(n));
[1, 2, 3, 4, 5].forEach(console.log);

console.log(["1", "2", "3"].map(Number));

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (n < 6 ? n.toString() : n))
);

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
    if (n < 6) {
      return n.toString();
    }

    return n;
  })
);

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numsGreaterThan5 = nums.filter((num) => num > 5 && num < 8);

console.log(numsGreaterThan5);

const users2 = [
  {
    id: 0,
    email: "email@gmail.com",
    age: 13,
    messages: ["", "", "", ""],
    budget: 50,
  },
  {
    id: 1,
    email: "email1@gmail.com",
    age: 26,
    messages: ["", ""],
    budget: 50,
  },
  {
    id: 2,
    email: "email2@gmail.com",
    age: 23,
    messages: ["", "", "", "", ""],
    budget: 500,
  },
  {
    id: 3,
    email: "email3@gmail.com",
    age: 30,
    messages: ["", "", "", "", "", ""],
    budget: 1000,
  },
];

const adultUsersWith2OrMoreMessages = users2
  .filter((user) => user.age >= 18 || user.messages.length > 2)
  .map((user) => user.email);

console.log(adultUsersWith2OrMoreMessages);

users2
  .filter((user) => user.budget > 100)
  .map((user) => user.email)
  .forEach((email) => console.log("email to", email));

const emails = [];

for (const user of users2) {
  if (user.budget > 100) {
    emails[emails.length] = user.email;
  }
}

for (const email of emails) {
  console.log("email to", email);
}

// Завдання:
const names = ["Alex", "Zustand", "Max", "Alina"];

// відсіяти елементи масива, які починаються з А, АБО мають довжину більшу за 3 симовли
// ["Alex", "Zustand", "Alina"]

console.log(names.filter((name) => name[0] === "A" || name.length > 3));

// id, email, phoneNumber, cardNumber

console.log([1, 2, 3, "hello"].includes("hello2"));
console.log(
  users2.includes({
    id: 1,
    email: "email1@gmail.com",
    age: 26,
    messages: ["", ""],
    budget: 50,
  }),
  users2.includes(users2[1])
);

console.log(
  users2.indexOf({
    id: 1,
    email: "email1@gmail.com",
    age: 26,
    messages: ["", ""],
    budget: 50,
  }),
  "indexOf",
  [1, 2, 3, 4, 4, 4, 4].lastIndexOf(4)
);

const user1 = users2.find((user) => user.budget > 100000);
const indexOf1User = users2
  .reverse()
  .findIndex((user, i) => user.budget === 50000000 && i > 0);

console.log(users2[indexOf1User]);

console.log(indexOf1User, "indexOfUser");

if (user1) {
  console.log(user1.email);
}

// Завдання:
// Написати свою реалізацію методу filter

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// умова - числа менші за 5
const result = [];

// for of

for (const num of data) {
  if (num < 5) {
    result.push(num);
  }
}

console.log(result, "result");

[].forEach((el, i, arr) => {});

Array.prototype.myForEach = function (callback) {
  //   const result = [];

  console.log(callback);

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

[1, 2, 3, 4, 5].myForEach((el, i, arr) => console.log(el, i, arr, "myForaech"));

[1, 2, 3, 4].map((e) => {
  return e + 10;
});

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const transformedElement = callback(this[i], i, this);

    result.push(transformedElement);
  }

  return result;
};

console.log(
  [1, 2, 3, 4].myMap((e) => {
    return e * 10;
  })
);

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const elementValidationResult = callback(this[i], i, this);

    if (Boolean(elementValidationResult)) {
      result.push(this[i]);
    }
  }

  return result;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8].myFilter((e) => e > 3 && e < 7));

// Завдання*

const numbersArr = [1, 2, 4, 3, 6, 9, 10, 1, 4, 0];
const k = 10;

function sumOf(arr, k) {}

// sumOf(numbersArr, 10) => [4, 6]
// sumOf(numbersArr, 100) => null

// O(n + k) - лінійна складність

// forEach, map, filter, find, findIndex

// sort, reduce

// some, every

const numbers2 = [1, 2, "3", 4, 5];

console.log(
  numbers2.some((n) => typeof n === "object"),
  "some"
);

const invoices = [
  { id: 1, amount: 2000 },
  { id: 2, amount: 2000 },
  { id: 3, amount: 2000 },
  //   { id: 4, amount: undefined },
];

// Завдання:
// Перевірити наявність елементу з amount: undefined
// (some)

console.log(
  invoices.some((invoice) => !invoice.amount),
  "some"
);

// every

console.log(
  invoices.every((invoice) => invoice.amount),
  "every"
);

Array.prototype.myEvery = function (callback) {
  let result = true;

  for (let i = 0; i < this.length; i++) {
    const elementCheckResult = callback(this[i], i, this);

    if (!elementCheckResult) {
      return false;
    }
  }

  return result;
};

console.log([1, 2, 3, 5, 8].myEvery((e) => e < 10));

// reduce

const numbs = [10, 20, 30, 40, 50];

const sum = numbs.reduce((acc, el, i, arr) => {
  acc = acc + el;
  return acc;
}, 0);

// [].reduce((sum, el) => (sum += el), 0);

console.log(sum, "sum");

const names2 = ["Igor", "Oleg", "Alina"];

const namesAsAnObj = names2.reduce((acc, name) => {
  acc[name] = name;
  return acc;
}, {});

console.log(namesAsAnObj);

const emails2 = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"];

const emailsWithout2 = emails2.reduce((acc, email) => {
  if (!email.includes("2")) {
    acc.push(email);
  }

  return acc;
}, []);

console.log(emailsWithout2);

console.log(emails2.filter((email) => !email.includes("2")));

const data2 = [
  { x: 10, y: 20 },
  { x: 1, y: 10 },
  { x: 4, y: 2 },
  { x: 0, y: 2 },
];

// {x: 15 , y: 34}

const totalPoint = data2.reduce(
  (acc, point) => {
    const { x, y } = point;

    acc.x = acc.x + x;
    acc.y = acc.y + y;

    return acc;
  },
  { x: 0, y: 0 }
);

console.log(totalPoint, "totalPoint");

// Завдання

const sentence = "I love programming. I know JS, HTML, CSS";

const countedLettersMap = [...sentence]
  .map((e) => e.toLowerCase())
  .reduce((acc, e) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    return acc;
  }, {});

console.log(countedLettersMap, "countedLettersMap");

// Порахувати кількість кожного символу строки
// reduce()

// {I: 2, i: 1, l: 1, o: 2 ...}

// sort

const nums2 = [1, 9, 5, 2];
const names4 = ["Igor", "Alina", "Oleg"];

const users4 = [{ id: 4 }, { id: 2 }, { id: 8 }];

const bools = [true, false, true, false];

console.log(nums2.sort());
console.log(names4.sort());
console.log(users4.sort());
console.log(bools.sort());

// 1 - 10
console.log(nums2.sort((e1, e2) => e1 - e2));
// 10 - 1
console.log(nums2.sort((n1, n2) => n2 - n1));

console.log(users4.sort((user1, user2) => user2.id - user1.id));

console.log(nums2.sort((e1, e2) => e1 - e2));

// locale compare

console.log(names4.sort((n1, n2) => n1.localeCompare(n2)));

console.log("z".localeCompare("z"));

// Mutable

const usersSubs = [{ paid: true }, { paid: false }, { paid: true }];

console.log(usersSubs, "userssubs before");

console.log([...usersSubs].sort((u1, u2) => (u1.paid ? -1 : 1)));

console.log(usersSubs, "userssubs after");

// Завдання:

const array = ["H", "e", "l", "l", "o"];

// звести масив array до строки, використовуючи reduce
// всі літери - маленькі
const hw1Res = array
  .map((letter) => letter.toLowerCase())
  .reduce((str, letter) => {
    str = str.concat(letter);
    return str;
  }, "");

console.log(hw1Res, "hw 1");

const cars = [
  { price: 500, brand: "Ford", color: "black" },
  { price: 600, brand: "Toyota", color: "red" },
  { price: 100, brand: "Acura", color: "grey" },
  { price: 900, brand: "Aston Martin", color: "orange" },
  { price: 600, brand: "Dodge", color: "grey" },
];

const sortedCars = cars.sort(
  (c1, c2) => c1.price - c2.price || c1.brand.localeCompare(c2.brand)
);

console.log(sortedCars, "sortedCars");

// -1
// +1
// 0

// відсортувати машини за 2 критеріями
// 1. price - зростання
// 2. brand - зростання (алфавітне)

// a + b = c
// a = c - b
// b = c - a
