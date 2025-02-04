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
}

UsersAPI.getUsers().then((users) => {
  console.log(users, "users from UsersAPI");
  // H/W!

  //   users.forEach(
  //     (user) => (document.body.innerHTML += `<h1>${user.email}</h1>`)
  //   );
});

// Завдання:

// 1. Додати метод getPosts до UsersAPI
// https://jsonplaceholder.typicode.com/posts [GET]
// Опрацювати помилки (try-catch)

// 2. Вивести користувачів і постів за допомогою bootstrap
// та DOM на сторінку (body) у вигляді карток
