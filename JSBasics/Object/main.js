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

// Знайти точку, яка має найбільше середнє арифметичне по (x,y,z)
