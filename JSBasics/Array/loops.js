const names = ["Igor", "Alex", "Olena"];

// for of - string, array
// for in - object

for (const name of names) {
  console.log(name);
}

for (let i = 0; i < names.length; i += 1) {
  console.log(names[i], i);
}

const users = [
  { name: "Igor", age: 25 },
  { name: "Alex", age: 34 },
];

for (const user of users) {
  const { name, age } = user;
  console.log(name, age);

  //   for (const key in user) {
  //     console.log(key, user[key], "!!!");
  //   }
}

// Завдання:

const numbers = [1, 5, 2, 6, 1, 7, 8, 5];
// порахувати суму чисел (for - of)

// reduce!

let sum = 0;

for (const num of numbers) {
  sum += num;
  console.log(sum);
}

console.log(sum, "sum");

const arr1 = [1, 2, 3];

arr1.slice();
arr1.indexOf();

// let c = 0;
// const fn = (a, b) => (c = a + b);

// fn(100, 200);

// console.log(c);

arr1.forEach((number) => console.log(number, "forEach"));

for (let i = 0; i < arr1.length; i += 1) {
  console.log(arr1[i], i);
}

arr1.forEach((num, index) => console.log(num, index));

// for of

const user = {
  email: "email@gmail.com",
  age: 90,
};

const { email, ...restData } = user;

console.log(email, restData);

const nums = [1, 2, 3, 4, 5];

const [one, ...restElements] = nums;

console.log(one, restElements);

// ... - rest
// ... - spread

const invoices = [
  { id: 1, reciever: 1, amount: 100 },
  { id: 2, reciever: 2, amount: 500 },
  { id: 3, reciever: 3, amount: 600 },
];

// console.log(invoices[0]);
// console.log(invoices[1]);

const [inv1, inv2, ...restInvoices] = invoices;

console.table(inv1);
console.table(inv2);

console.log(restInvoices);

// Not common
const str = "IgorIgor";
const [l1, l2, l3, ...otherLetters] = str;

console.log(l1, l2, l3, otherLetters);

const arrayFromStr = str.split("");
console.log(arrayFromStr, "arrayFromStr");

const dates = "01.07.2021:02.07.2007:02.04.2016";
console.log(dates.split("0"));

// Завдання:

const text = `The autumn leaves danced on the gentle breeze, creating a symphony of rustling sounds in the park. 
  A squirrel paused its foraging to watch the colorful display before darting back to its task of preparing for winter.`;

//   Розбити текст на речення
// Повернути найдовше речення з тексту

const splittedSentences = text.split(".");
let theLongestSen = splittedSentences[0];

splittedSentences.forEach((sen) => {
  if (sen.length > theLongestSen.length) {
    theLongestSen = sen;
  }
});

console.log(theLongestSen, "theLongestSen");

console.log(splittedSentences[2], "!");

const strs = ["A", "BC", "d", "e"];

console.log(strs.join(""), "join");

const datesArr = ["08.11.1999", "07.03.2014"];

console.log(datesArr.join("|"));

// Join [] -> separator -> ""
// Split "" -> separator -> []

const res = "Hello".split("").reverse().join("");
console.log(res);

const arr3 = [1, 2, 3, 4];
console.log(arr3.reverse());

const inneredArray = [
  [1, 2, 3, 4],
  [5, 6, 7, [1, 2, 4, [9], [1]], 8],
  [9, 10, 11, 12],
];

console.log(inneredArray);

inneredArray.forEach((el) => console.log(el));

const flatedArray = inneredArray.flat(2);

console.log(flatedArray);

// Завдання:

const hwArray = [[1, 2, 3], [5], [7, 7, 3], [9, 2], [90]];

// flat

// Порахувати суму елементів масиву
// Знайти мінімалньний та максимальний елемент

const flattedArray = hwArray.flat(1);

let min = flattedArray[0];
let max = flattedArray[0];
let hwSum = 0;

flattedArray.forEach((number) => {
  hwSum += number;

  if (number < min) {
    min = number;
  }

  if (number > max) {
    max = number;
  }
});

console.log(`Sum: ${hwSum}`, `Min: ${min}`, `Max: ${max}`);

// Завдання

const hwUsers = [{ email: "email1@gmail.com" }, { email: "email2@gmail.com" }];

const [{ email: email1 }, { email: email2 }] = hwUsers;

// const { email: user1Email } = user1;
// const { email: user2Email } = user2;

console.log(email1, email2);

// деструктуризувати поля email для user1 та user2

// -> email1@gmail.com, email2@gmail.com

// no indexing, no .
