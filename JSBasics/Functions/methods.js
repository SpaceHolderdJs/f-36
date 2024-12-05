// this
// functions arguments

// this -> call, bind, apply

function main() {
  console.log(this);
}

// main();

const user = {
  name: "Igor",
  score: 0,
  changeScore: function (score) {
    this.score = score;
  },
};

user.changeScore(100);
console.log(user);

const adminUser = {
  name: "Admin",
  score: 0,
};

adminUser.changeScore = user.changeScore.bind(adminUser, 1000);
user.changeScore.apply(adminUser, [200]);
user.changeScore.call(adminUser, 300);
adminUser.changeScore();

console.log(adminUser);

// main.apply(user);
// main.call({});
// refferce
main.bind();

const engine = {
  volume: 2.3,
  cylinders: 4,
  run: function () {
    console.log("Engine is running");
  },
};

const selector = {
  type: "auto",
  gears: [1, 2, 3, 4, 5],
  currentGear: 3,
  setGear: function (gear) {
    this.currentGear = gear;
    console.log(`Gear was switched: ${this.currentGear}`);
  },
};

const carBody = {
  model: "Ford",
  seats: 4,
  open: function (doors) {
    console.log(`${doors} doors was opened`);
  },
};

const { volume, cylinders } = engine;
const { gears, currentGear } = selector;
const { model, seats } = carBody;

const car = {
  volume,
  cylinders,
  gears,
  currentGear,
  model,
  seats,
};

car.launch = engine.run.bind(car);
car.switchGear = selector.setGear.bind(car);
car.openDoors = carBody.open.bind(car);

car.prepare = function (doorsToOpen) {
  this.launch();
  this.switchGear(1);
  this.openDoors(doorsToOpen || 1);
};

car.prepare();

// car.launch();
// car.switchGear(5);
// car.openDoors(1);

console.log(Math.max.apply(null, [1, 56, 1, 34, 25, 8, 9]));
console.log(Math.max([1, 56, 1, 34, 25, 8, 9]));

// Function - Constructor

// Prototype
// Objects

// CONSTRUCTOR

Object;
String;
Number;
Array;
Boolean;

// new

function User({ name, age }) {
  this.name = name;
  this.age = age;
  this.skills = [];

  this.showInfo = function () {
    console.log(this.name, this.age);
  };

  this.birthday = function () {
    this.age = this.age + 1;
  };
}

const userFromConstructor = new User({ name: "Igor", age: 12 });

userFromConstructor.showInfo();
userFromConstructor.birthday();
userFromConstructor.showInfo();

new User("Oleg", 22).showInfo();

console.log(new String("Hello"), new Number(5));

// Завдання:

// Створити функцію конструктор для Post

// Поля:
// title
// text
// author
// date

// Методи:
// delete()
// edit(newPost)
// setTitle(title)

function Post(title, text, author, date) {
  this.title = title;
  this.text = text;

  this.author = new User(author);

  this.date = date;

  this.delete = function () {
    console.log(`The item ${this.title} was deleted`);
  };

  this.edit = function (params) {
    for (const key in params) {
      this[key] = params[key];
    }
  };

  this.setTitle = function (title) {
    this.title = title;
  };

  this.getUser = function () {
    console.log(this.author, "author");
    return this.author;
  };
}

const post = new Post("Title", "text", { name: "Igor", age: 100 }, "12.12.12");

post.getUser();

post.author.showInfo();

console.log(post, "post!!!");

// post.delete();

// post.edit({
//   title: "New title",
//   text: "New Text",
//   date: "11.11.11",
//   author: "AUTHOR",
// });

// post.setTitle("TITLE");

// HW:

// Завдання - додати до author посту користувача з конструктора User

// {
//     title: "New title",
//     text: "New Text",
//     date: "11.11.11",
//     author: {name: "", age: 0, skills: [], ...methods }
//  }

// додати до посту метод getUser (повертає користувача - автора посту)

// call, bind, apply -> this
// function constructor User -> new User(...arguments)
// function vs () => function is hoisted

// function

// OOP

// Typescript

// class

// class = function
// class - prototype
