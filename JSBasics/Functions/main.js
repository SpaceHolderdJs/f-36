// document.body.onclick = () => {
//   alert("Hello");
// };

// Functions

// Function Declaration

const a = 10;

function hello(name = "Name is not provided") {
  const a = 20;
  console.log(a);
  console.log(`Hello ${name}`);
}

hello("Igor");
hello("Alex");
hello("Alina");

hello();

// Завдання: описати функції

multiply(10, 11);

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return !b ? Error("Divided by 0") : a / b;
}

const s = sum(10, 20);
console.log(s, "s");

const d = divide(100, 10);
console.log(d);

const users = ["user1", "user2"];
const users2 = ["user3", "user4"];

function presentUsers(users = []) {
  if (users.length <= 1) throw Error("2 or less users wont be presented");
  users.forEach((u) => console.log(u));
}

// console.log(presentUsers(users));

try {
  presentUsers(users2);
} catch (err) {
  console.log(err);
}

const test2 = function (a) {
  console.log(a, "a");
};

test2(2000);
// Function expression

const testArrowFunction = (n) => n;

const arrowSum = (a, b) => a + b;

const deleteUsers = (users) => {
  return users.filter(() => false);
};

console.log(deleteUsers(users), "!!!!");

const sum2 = arrowSum(10, 20);
console.log(sum2);

const res = testArrowFunction(100);
console.log(res);

// Function Context

function item() {
  console.log(this);
}

item();

const user = {
  name: "Igor",
  age: 25,

  sayHello: function () {
    console.log(`Hello, my name is ${this.name} I am ${this.age}`);
  },

  setName: function (name) {
    this.name = name;
  },

  showAge: () => {
    console.log(this, "!!!!!");
  },
};

user.setName("Oleg");

console.log(user, "!!!!");

console.log(user.age);
console.log(user.name);

user.sayHello();
user.showAge();

const car = {
  brand: "Ford",

  showBrand: function () {
    this.brand = "Toyota";
    console.log(this.brand);
  },
};

car.showBrand();

// ["q", "w", "r", "t", "o"].forEach((key) => {
//   const button = document.createElement("button");
//   button.textContent = key;

//   button.onclick = () => {
//     alert(key);
//   };

//   document.body.appendChild(button);
// });

// Завдання: дописати 3 методи користувача та протестувати їх

// H/W
const student = {
  name: "",
  age: 0,

  marks: [
    { id: 1, value: 12 },
    { id: 2, value: 8 },
  ],

  // Змінити логіку для запису {} у marks, має повертати оновлений масив
  //   {id: this.marks.length, value: m}
  addMark: function (m) {
    // додати id
    const mark = {
      id: this.marks.length + 1,
      value: m,
    };

    this.marks.push(mark);

    return mark;
  },

  // Додати метод removeMark (прибирає оцінку за id), має повертати оновлений масив
  // user.removeMark(1)

  removeMark: function (id) {
    this.marks = this.marks.filter((mark) => mark.id !== id);
  },

  setName: function (name) {
    this.name = name;
  },

  setAge: function (age) {
    this.age = age;
  },
};

console.log(student.setAge(26));

const userMark = student.addMark(4);

console.log(student);

student.removeMark(userMark.id);

console.log(student);
