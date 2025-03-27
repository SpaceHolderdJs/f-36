import express from "express";

let posts = [
  { id: 0, title: "Title1", body: "Body1" },
  { id: 1, title: "Title2", body: "Body2" },
];

export const postsRouter = express.Router();

postsRouter.get("/", (_, response) => {
  return response.status(200).send(posts);
});

postsRouter.post("/", (request, response) => {
  posts.push(request.body);

  return response.status(200).send(posts.at(-1));
});

postsRouter.patch("/", (request, response) => {
  posts = posts.map((post) => {
    if (post.id === request.body.id) {
      return request.body;
    }

    return post;
  });

  console.log(posts, "posts after update");

  return response.status(200).send(request.body);
});

postsRouter.delete("/", (request, response) => {
  posts = posts.filter((post) => post.id !== request.body.id);

  console.log(posts, "posts after delete");

  return response
    .status(202)
    .send({ msg: `Post with id ${request.body.id} was deleted` });
});

// Завдання:
// Аналогічно до коду з уроку (posts)

// 1. Створити users.js файл з окремим роутером та даними (let users)

let users = [{ id: 0, name: "Igor", city: "Kyiv" }];

// 2. Реалізувати GET ендпоінт (повертає всіх користувачів) 200
// 3. Реалізувати POST ендпоінт (cтворює нового користувача) 200
// 4. Реалізувати DELETE ендпоінт (видаляє користувача за id) 202

// Використовуючи Thunder протестити ендпоінти