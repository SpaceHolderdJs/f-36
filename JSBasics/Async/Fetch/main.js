// fetch
// JSON

// GET
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.map((user) => user.email));
  })
  .catch((err) => console.log(err));

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data, "users");
  } catch (err) {
    console.log(err);
  }
};

getUsers();

class UsersAPI {
  static getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      return users;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  static getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();

      return posts;
    } catch {
      console.log(err);
      return [];
    }
  };
}

UsersAPI.getUsers().then((users) => {
  // H/W!

  users.forEach(
    (user) =>
      (document.body.innerHTML += `<div class="card w-75 mb-3">
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
                ${user.email}
            </p>
        </div>
    </div>;`)
  );
});

UsersAPI.getPosts().then((posts) => {
  posts.forEach(
    (post) =>
      (document.body.innerHTML += `<div class="card w-75 mb-3">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
                ${post.body}
            </p>
        </div>
    </div>;`)
  );
});

// Завдання:

// 1. Додати метод getPosts до UsersAPI
// https://jsonplaceholder.typicode.com/posts [GET]
// Опрацювати помилки (try-catch)

// 2. Вивести користувачів і постів за допомогою bootstrap
// та DOM на сторінку (body) у вигляді карток
