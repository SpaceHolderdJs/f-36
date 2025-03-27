const axios = require("axios");
const { writeFile } = require("node:fs/promises");

async function getAllPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
}

function createPostHTML(post) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    </body>
    </html>
    `;
}

async function createPostsFiles() {
  const posts = await getAllPosts();

  for (const post of posts) {
    await writeFile(
      `./posts-files/post-${post.id}.html`,
      createPostHTML(post),
      {
        encoding: "utf-8",
      }
    );
  }
}

module.exports = {
  createPostsFiles,
};
