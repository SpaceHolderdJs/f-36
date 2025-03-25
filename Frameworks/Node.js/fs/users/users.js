const axios = require("axios");
const {
  writeFile,
  mkdir,
  rmdir,
  readdir,
  unlink,
} = require("node:fs/promises");
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
            </head>

            <body>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s" />
                    <h1>${user.name}</h1>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                </div>
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
