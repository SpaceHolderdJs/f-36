class A {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  hello() {
    console.log("Hello", this.a);
  }
}

const a = new A(10);
a.hello();

// function A1(a, b) {
//   this.a = a;
//   this.b = b;

//   this.hello = function () {
//     console.log("Hello");
//   };
// }

// const a1 = new A1(100);
// a1.hello();

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
    if (!this.post) throw new Error("This Author has no post!");
    this.post.title = title;
  }

  changePostText(text) {
    if (!this.post) throw new Error("This Author has no post!");
    this.post.text = text;
  }

  changePostDate(date) {
    if (!this.post) throw new Error("This Author has no post!");
    this.post.date = date;
  }

  deletePost() {
    if (!this.post) throw new Error("This Author has no post!");

    this.post.author = undefined;
    this.post = undefined;
  }

  // Завдання:
  // 1 - Додати методи changePostDate, changePostText
  // 2 - Додати метод deletePost - видаляє пост та зв'язок з користувачем (Author)
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

const user = new User("John", 27);
user.initials();

const authorData = {
  name: "John",
  age: 27,
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
post.author.changePostTitle("This is a new title for Post1");

console.log(post);

const anotherAuthor = new Author("Oleg", 21, undefined);

post.changeAuthor(anotherAuthor);
anotherAuthor.changePostTitle("This is a post title from another author");
anotherAuthor.changePostText("Changed text");
anotherAuthor.changePostDate("01.01.2001");

anotherAuthor.deletePost();

console.log(post);
