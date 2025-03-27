const axios = require("axios");
const { writeFile, readdir, unlink } = require("node:fs/promises");
const { mockedUsers } = require("./utils");

async function getAllUsers() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data;
}

function listUsers(users = mockedUsers) {
  for (const user of users) {
    console.log(`User: ${user.name}, age: ${user.age}`);
  }
}

async function deleteUsersFolder(name = "users-files") {
  const files = await readdir(`./${name}`);

  for (const file of files) {
    console.log(file, "file", `./${name}/${file}`);
    await unlink(`./${name}/${file}`);
  }

  //await rmdir(`./${name}`);
}

async function createUsersFolder(name = "users-files") {
  //   await mkdir(`./${name}`);
}

function createUserHTML(user) {
  return `
    <html>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </head>

      <body>
        <div class="card" style="width: 18rem;">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h1>${user.name}</h1>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
          />
          <h1>${user.name}</h1>
          <p>${user.email}</p>
          <p>${user.phone}</p>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  `;
}

async function createUsersFiles() {
  await deleteUsersFolder();
  await createUsersFolder();

  const users = await getAllUsers();

  for (const user of users) {
    await writeFile(`./users-files/${user.name}.html`, createUserHTML(user), {
      encoding: "utf-8",
    });
  }
}

module.exports = {
  listUsers,
  createUsersFiles,
};

// Завдання:
// 1. Вивести додаткову інформацію у HTML кожного користувача (верстка)

// 2. Створити файл posts.js (у папці posts)
// Отримати дані про пости за посиланням: https://jsonplaceholder.typicode.com/posts (get)
// Cтворити html файли під дані постів (title, body)
// Додати підключення логіки під створення файлів у index.js
