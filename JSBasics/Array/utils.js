const ns = [1, 2, 3, 4];

// immutable es6+
const nsMapped = ns.map((n) => n * 10);
console.log(nsMapped, ns);

// mutable es5 <
// [...ns]
const nsSorted = [...ns].sort((n1, n2) => n2 - n1);
console.log(nsSorted, ns);

// immutable es6+
const nsToSorted = ns.toSorted((n1, n2) => n2 - n1);
console.log(nsToSorted, ns);

const nsReversed = Array.from(ns).reverse();
console.log(nsReversed, ns);

const nsToReversed = ns.toReversed();
console.log(nsToReversed, ns);

const reduced = ns.reduceRight((acc, n) => {
  console.log(n);

  return (acc += n);
}, 0);

console.log(reduced, "reduced");

// split
// splice

// const splicedItems = ns.splice(0, 1);
// console.log(splicedItems, ns);

// const splicedFromAMiddle = ns.splice(1, 2);
// console.log(splicedFromAMiddle, ns);

// const splicedAndInsert = ns.splice(1, 2, 20, 30, 35, 40);
// console.log(splicedAndInsert, ns);

const splicedAndDidNotRemoved = ns.splice(3, 0, 100);
console.log(splicedAndDidNotRemoved, ns);

const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    age: 28,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma.w@email.com",
    age: 34,
    occupation: "Product Manager",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@email.com",
    age: 31,
    occupation: "Data Analyst",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    age: 29,
    occupation: "UX Designer",
  },
  {
    id: 5,
    name: "David Brown",
    email: "d.brown@email.com",
    age: 42,
    occupation: "Project Manager",
  },
  {
    id: 6,
    name: "Lisa Garcia",
    email: "l.garcia@email.com",
    age: 27,
    occupation: "Marketing Specialist",
  },
  {
    id: 7,
    name: "James Wilson",
    email: "j.wilson@email.com",
    age: 36,
    occupation: "System Administrator",
  },
  {
    id: 8,
    name: "Ana Martinez",
    email: "a.martinez@email.com",
    age: 33,
    occupation: "Business Analyst",
  },
  {
    id: 9,
    name: "Robert Taylor",
    email: "r.taylor@email.com",
    age: 39,
    occupation: "Sales Manager",
  },
  {
    id: 10,
    name: "Michelle Lee",
    email: "m.lee@email.com",
    age: 30,
    occupation: "Content Writer",
  },
];

// user updates
const idOfTheUserToUpdate = 9;

const payload = {
  id: 9,
  name: "Taylor Taylor",
  email: "r1.taylor@email.com",
  age: 29,
  occupation: "Developer",
};

let userToUpdate = users.find((user) => user.id === idOfTheUserToUpdate);

if (userToUpdate) {
  userToUpdate = payload;
}

console.log(userToUpdate, users, "!!!");

// 1. Map immutable

const updatedUsers = users.map((user) => {
  if (user.id === idOfTheUserToUpdate) {
    return payload;
  }

  return user;
});

// users.map((user) => (user.id === idOfTheUserToUpdate ? payload : user));

console.log(updatedUsers, "updatedUsers");

// 2. Splice

const indexOfUserToUpdate = users.findIndex(
  (user) => user.id === idOfTheUserToUpdate
);

if (indexOfUserToUpdate !== -1) {
  const [userBefore] = users.splice(indexOfUserToUpdate, 1, payload);
  console.log(userBefore);
}

console.log(users, "users after splice");

// 3. Reduce

const updatedUsersReduce = users.reduce((usrs, user) => {
  if (user.id === idOfTheUserToUpdate) {
    usrs.push(payload);
    return usrs;
  }

  usrs.push(user);
  return usrs;
}, []);

console.log(updatedUsersReduce, "updatedUsersReduce");

// Delete

const idOfTheUserToDelete = 5;

// 1. Filter immutable
// const usersDeleted = users.filter((user) => user.id !== idOfTheUserToDelete);
// console.log(usersDeleted, "usersDeleted");

// 2. Splice

const indexOfUserToDelete = users.findIndex(
  (user) => user.id === idOfTheUserToDelete
);

const usersAfterDelete = users.toSpliced(indexOfUserToDelete, 1);
console.log(usersAfterDelete);

console.log(users, "usersAfterSplice");

// Important!!!!
console.log([1, 2, 3].splice(0, 1));
console.log([1, 2, 3].toSpliced(0, 1));

const data = [1, [2, 3], 4, 5].flatMap((e) => {
  console.log(e);

  return typeof e === "number" ? e * 10 : e;
});

console.log(data);

// Завдання:

const nums = [4, 1, 4, [9, 1], [1], 1, 8];

// повернути масив, де всі елемнти вкладених масивів будуть строками (string)

// [4, 1, 4, "9", "1", "1", 1, 8]

const res = nums.reduce((acc, n) => {
  if (typeof n === "number") {
    acc.push(n);
    return acc;
  }

  n.forEach((inneredNumber) => {
    acc.push(`${inneredNumber}`);
  });

  return acc;
}, []);

console.log(res, "res");

// Завдання:

const arr1 = ["C", "D", "A", 4, "R", 10, "X", "Z", 8];

// 1. Відокремити строки від чисел та відсортувати кожен масив у порядку зростання
// ["A", "C", "D", "R", "X", "Z"]
// [4, 8, 10]

// 2. Перегорнути кожен з масивів з завдання 1 (immutable)

// 3. Масив arr1 заповинити елементами, відповідно до їх алфавітних позицій (для number)

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// ["C", "D", "A", "E", "R", "K", "X", "Z", "I"];

const numsWith = nums.flatMap((elem, i, arr) => {
  return Array.isArray(elem)
    ? elem.forEach((el, indx) => arr.splice(i + indx, el))
    : elem;
});

console.log(numsWith);
