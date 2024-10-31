// Object

const user = {
  name: "Igor",
  email: "email@gmail.com",
  age: 25,
  isAdmin: false,
};

user.name = "Oleg";
user.age++;
user["age"] = user["age"] + 1;

user.isAdmin = true;

console.log(user);
console.log(user.email);
console.log(user.name);
console.log(user.age);

console.log(user["isAdmin"]);
console.log(user["name"]);

const str = {
  0: "H",
  1: "e",
  2: "l",
  3: "l",
  4: "o",
};

console.log(str);
console.log(str[0]);
console.log(str[2]);

console.log(user.age, user.email);
console.log(`${user.age} ${user.name}`);

console.table(user);
console.table(str);

// Завдання

const car = {
  color: "black",
  brand: "Ford",
  model: "Mustang",
  year: 1678,
};

// Додати 1 рік
// Змінити колір на синій
// Змінити модель на "focus"

car.year++;
car.model = "Focus";
car.color = "Blue";

console.log(car);

const user1 = { nickname: "user1" };
// Wrong way!
const user2 = user1;
const user3 = user2;

user2.nickname = "user2";

console.log(user1, "user1");
console.log(user2, "user2");
console.log(user3, "user3");

// Spread operator
const user4 = { ...user1 };
user4.nickname = "New Nickname";

console.log(user4, "user4");

console.log(user1, "user1");
console.log(user2, "user2");
console.log(user3, "user3");

// Завдання:

const car2 = {
  price: 4000,
};

const car3 = {
  price: 4500,
};

console.log(car2.price, car3.price);

const minPrice = Math.min(car2.price, car3.price);

console.log(minPrice, "minPrice");

if (car2.price === minPrice) {
  console.log(`The lowest price car`, car2);
} else {
  console.log(`The lowest price car`, car3);
}

// Знайти машину з найменшою ціною (Math.min)

// Завдання:

const p1 = {
  x: 1,
  y: 9,
  z: 3,
};

const p2 = {
  x: -1,
  y: 2,
  z: 0,
};

const avr1 = (p1.x + p1.y + p1.z) / 3;
const avr2 = (p2.x + p2.y + p2.z) / 3;

console.log(avr1, avr2);

const maxAvg = Math.max(avr1, avr2);

console.log(maxAvg);

// Знайти точку, яка має найбільше середнє арифметичне по (x,y,z)

const object = { a: 10 };

const users = {
  Alex: {
    email: "email1@gmail.com",
    age: 23,
  },
  Alina: {
    email: "email2@gmail.com",
    age: 27,
  },
  Andrew: {
    email: "email3@gmail.com",
    age: 33,
  },
};

// Will not work!
// for (const user of users) {
//   console.log(user);
// }

const usersStatistics = {
  totalAge: 0,
  counter: 0,
};

for (const user in users) {
  // console.log(user);
  // console.log(users[user]);

  // console.log(users[user].age);
  // console.log(users[user]["email"]);

  usersStatistics.totalAge += users[user].age;
  usersStatistics.counter += 1;
}

usersStatistics.avgAge = usersStatistics.totalAge / usersStatistics.counter;

console.table(usersStatistics);

// console.log(totalAge / counter, "totalAge");

console.log(users.Alex);
console.log(users.Alex.email);

console.log(users.Alina.email);

console.log(user.John);

console.log((users.Alex.age + users.Alina.age + users.Andrew.age) / 3);

// Завданя:
// Порахувати середній вік користувачів

const name = "Alex";

switch (name) {
  case "Alex": {
    console.log(name);
    break;
  }

  default: {
    console.log("Name is not recognized");
  }
}

const names = {
  Alex: "Alex from Object",
};

console.log(names[name] || "Name is not recognized");

Object;

const obj = new Object({ a: 10, b: 0, user: { name: "Igor" } });
const obj2 = { a: 10 };

console.log(obj.valueOf());
console.log(obj2.valueOf());

console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("b"));
console.log(obj.hasOwnProperty("c"));
console.log(obj.user.hasOwnProperty("name"));

// Not a best way to do
console.log(Boolean(obj.b));

console.log(obj.toString());
console.log(`Hello, I am ${obj}`);
console.log("Hello " + obj);

console.log(obj.toLocaleString());

const obj3 = { a: 10 };
obj3.b = 15;

console.log(obj3);

Object.defineProperty(obj3, "c", {
  value: 20,
  // writable: false, // changes of the value
  // enumerable: true, // loops visibility (for in)
  // configurable: false, // deletion / re-creation of value
});

console.log(obj3.propertyIsEnumerable("c"), "!!!");

console.log(obj3.c);

// writable
obj3.c = 100;

// configurable
delete obj3.c;

// enumerable
for (const n in obj3) {
  console.log(n, "key");
}

console.log(obj3);

const data = {
  sum: 100,
  email: "sergislskdslmfsl@fmkf.cs",

  address: undefined,
  password: undefined,
};

// Завдання:

const source = {};

const values = {
  a: { v: 10, w: true, e: false, c: true },
  b: { v: 15, w: true, e: true, c: false },
  c: { v: 20, w: true, e: true, c: true },
};

// v - value
// w - writable
// c - configurable
// e - enumerable

// записати у source всі values, врахувати налаштування
// for (in) -> Object.defineProperty(...)

for (const key in values) {
  const settings = values[key];

  Object.defineProperty(source, key, {
    value: values[key].v,
    writable: values[key].w,
    enumerable: values[key].e,
    configurable: values[key].c,
  });
}

console.log(source, "source");

// Checking

for (const key in source) {
  console.log(key, "key");
  console.log(source[key], "value");
  console.log(source.propertyIsEnumerable(key));
}

// Object.defineProperty(obj, key, settings)

// Перевірити результати запису

// Результат:
// source = {a: 10, b: 15, c: 20}
