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

// Завдання*

const numbersArr = [1, 2, 4, 3, 6, 9, 10, 1, 4, 0];
const k = 10;

function sumOf(arr, k) {}

// sumOf(numbersArr, 10) => [4, 6]
// sumOf(numbersArr, 100) => null

// O(n + k) - лінійна складність
