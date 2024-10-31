// Object

Object;

const user = {
  email: "email@gmail.com",
  age: 27,
  name: "Igor",
  addrress: { city: "Kyiv", street: "Street" },
};

user.email = "email2@gmail.com";

delete user.email;
delete user.age;
// delete user.addrress.city;

// won't work
const a = 10;
delete a;

console.log(a);

console.log(user, "user");

// Freeze

Object.freeze(user);
Object.freeze(user.addrress);

user.age = 1000;
user.score = 10;
// delete user.addrress;
user.addrress.city = "Kharkiv";

console.log(user);

console.log(Object.isFrozen(user), "isFrozen");
console.log(Object.isFrozen({}), "isFrozen2");

// Seal
const user2 = { email: "email2@gmail.com", age: 25, address: { city: "Kyiv" } };

Object.seal(user2);
Object.seal(user2.address);

user2.email = "changed email";
user2.age = 99;

delete user2.email;
user2.password = "password";
user2.x = 10;

delete user2.address.city;

console.log(user2);

console.log(Object.isSealed(user2), "isSealed");
console.log(Object.isSealed({}), "isSealed2");

// Entries
const user3 = { email: "email3@gmail.com", age: 30, address: { city: "Kyiv" } };
console.log(Object.entries(user3));

for (const key in user3) {
  console.log(key, user3[key], "key - value");
}

for (const pair of Object.entries(user3)) {
  console.log(pair[0], pair[1], "pair");
}

//  FromEntries
const user4 = Object.fromEntries([
  ["name", "Igor"],
  ["age", 25],
  ["city", "Kyiv"],
  ["city", "Kharkiv"],
]);

console.log(user4, "user4");

const user5 = { email: "email@gmail.com", age: 24 };

// Keys

const keys = Object.keys(user5);
console.log(keys);
console.log(keys.length);

// Values

const values = Object.values(user5);
console.log(values);
console.log(values.length);

const errors = {
  email: "Email must contain @",
  password: "Password should have at least 10 symbols",
};

Object.keys(errors).length > 0;

// Prevent extentions

const user6 = { email: "email@gmail.com" };
Object.preventExtensions(user6);

user6.age = 40;
user6.email = "email";

delete user6.email;

console.log(user6, "user6");

const data = {
  email: "",
  password: "",
};

Object.preventExtensions(data);

// delete data.email;

data.email = "email2@gmail.com";
data.password = "password";

data.age = 100;

console.log(data);

// isExtensible

console.log(Object.isExtensible(data), "isExtensible");
console.log(Object.isExtensible({}), "isExtendible2");

// Desctructure

const firstCarModelFromShop = {
  model: "Toyota",
  price: 1000,
  engine: { capacity: 3, c: { c1: 1, c2: 2, c3: 3 } },
};

const price = 90000;

const {
  engine: {
    capacity,
    c: { c1, c2, c3 },
  },
  model: carModel,
  price: carPrice,
} = firstCarModelFromShop;

console.log(
  capacity,
  carModel,
  carPrice,
  "Destructed",
  price,
  c1,
  c2,
  c3,
  firstCarModelFromShop.engine.c.c1
);

console.log(
  firstCarModelFromShop.model,
  firstCarModelFromShop.price,
  firstCarModelFromShop.engine.capacity
);
// console.log(car.model, car.price);

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

const [firstUser, secondUser, thirdUser] = users;

const {
  address: {
    geo: { lat, lng },
  },
} = firstUser;

console.log(lat, lng);
console.log(firstUser.address.geo.lat);

// Завдання:
const auto = {
  color: "blue",
  wheels: 4,
  price: 1200,
};

const details = {
  info: "Text text text",
  owner: "Alex",
};

//
// 1. Об`єднати auto та details
// auto -> details
// for in

// 2. Заборонити будь які зміни details вашого auto

// 3. Змінити видимість у циклі параметру color та параметру details.owner
// for - in

// 4. Вивести дані про власника за допомогою Destructure {}
