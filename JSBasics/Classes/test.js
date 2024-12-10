class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  initials() {
    console.log(`My initals are ${this.name}`);
  }
}

class Author extends User {
  constructor(name, age, post) {
    super(name, age);
    this.post = post;
  }
  changePostTitle(title) {
    if (!this.post) throw new Error("This Author has no post");
    this.post.title = title;
  }
  changePostDate(date) {
    if (!this.post) throw new Error("This Author has no post");
    this.post.date = date;
  }
  changePostText(text) {
    if (!this.post) throw new Error("This Author has no post");
    this.post.text = text;
  }
}

class Post {
  constructor(title, text, author, date) {
    this.title = title;
    this.text = text;

    this.author = author;
    this.author.post = this;

    this.date = date;
  }

  changeAuthor(author) {
    this.author.post = undefined;

    this.author = author;
    this.author.post = this;
  }
}

const user = new User("Lesia", 37);
user.initials();

const authorData = {
  name: "Lesia",
  age: "37",
  post: undefined,
};

const post = new Post(
  "Post1",
  "Text",
  new Author(authorData.name, authorData.age, authorData.post),
  "07.06.2021"
);

console.log(post);

post.author.initials();
post.author.changePostTitle("This is a new title for Post 1");

console.log(post);

// const afterChange = new Author("", 21, undefined).changePostTitle("New Title");
// console.log(afterChange);

const anotherAuthor = new Author("Oleg", 21, undefined);

post.changeAuthor(anotherAuthor);

anotherAuthor.changePostTitle("this is a post Title from another author");

console.log(post);

Array;
Object;
String;
Number;

class PowerfulNumber extends Number {
  constructor(v) {
    super(v);
  }

  sumOfNumbers() {
    return `${this}`
      .replaceAll(".", "")
      .split("")
      .reduce((sum, d) => (sum += Number(d)), 0);
  }

  pow() {
    return this * this;
  }

  toString() {
    return {
      number: this,
      string: this,
    };
  }
}

const pNumber = new PowerfulNumber(100.89);

console.log(pNumber, pNumber.toString(), pNumber.toFixed(1), pNumber.pow());
console.log(pNumber.sumOfNumbers());

Number.prototype.hello = function () {};

class PNumberExtended extends PowerfulNumber {
  constructor(v) {
    super(v);
  }

  toString() {
    return "PNumberExtended";
  }
}

PNumberExtended.prototype.toString = function () {
  console.log("PROTOTYPE");
};

console.log(new PNumberExtended(500), new PNumberExtended(500).toString());

// Array.prototype.forEach = function () {
//   console.log(this);
// };

// Завдання:

// Унаслідувати (extends) клас String
// Переписати метод replace("value to change", "value to apply", true)
// "hello".replace("l", "*") => "he*lo"
// "hello".replace("l", "*", true) => "he**o"
// "JavaScript".replace("a", "0", true) => "J0v0Script"
// По 1 символу за раз!!!

// Додати метод reverse () - перегортає строку

class CustomString extends String {
  constructor(value) {
    super(value);
  }

  replace(valueToSearch, valueToChangeOn, isReplaceAll = false) {
    let result = "";
    let replaceCount = 0;
    let iterations = 0;

    for (const char of this) {
      iterations++;
      if (char === valueToSearch) {
        result += valueToChangeOn;
        replaceCount++;

        if (!isReplaceAll) return result + this.slice(iterations);

        continue;
      }

      result += char;
    }

    return { result, replaceCount };
  }

  reverse() {
    return this.split("").reverse().join("");
  }
}

const customStr = new CustomString("hello world");

console.log(customStr.replace("l", "*"));
console.log(customStr.replace("l", "*", true));
console.log(customStr.reverse());
