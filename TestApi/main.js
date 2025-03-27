fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((posts) => console.log(posts));

fetch("http://localhost:3000/posts", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 2,
    title: "Post 3",
    body: "Body 3",
  }),
})
  .then((response) => response.json())
  .then((post) => console.log(post, "created post"));

fetch("http://localhost:3000/posts", {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 2,
    title: "Updated post",
    body: "Updated post",
  }),
})
  .then((response) => response.json())
  .then((post) => console.log(post, "updated post"));

fetch("http://localhost:3000/posts", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 2,
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result, "deleted result"));
