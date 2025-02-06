// Fetch Methods
// HTTP methods: GET, POST, PUT, PATCH, DELETE

// GET
fetch(`https://jsonplaceholder.typicode.com/users`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log(data, "with method get");
  });

// POST

const userToCreate = {
  id: 11,
  name: "Igor",
  username: "SpaceHolder",
  email: "email@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Kyiv",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

console.log(JSON, "JSON");
console.log(JSON.stringify({ name: "Igor" }, 5), "stringify");
console.log(JSON.parse('{"name": "Igor"}'), "parse");
// console.log(JSON.rawJSON(`111`), "raw json");
// console.log(JSON.isRawJSON("1111"), "isRawJson");

// POST
fetch(`https://jsonplaceholder.typicode.com/users`, {
  method: "POST",
  body: JSON.stringify(userToCreate),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    console.log(response.status, response.statusText, "status");
    return response.json();
  })
  .then((data) => console.log(data, "created user"))
  .catch((error) => console.log(error, "error"));

// PUT
fetch(`https://jsonplaceholder.typicode.com/users/1`, {
  method: "PUT",
  body: JSON.stringify({ id: 1, name: "New name for a user" }),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((payload) => console.log(payload, "payload [PUT]"))
  .catch((error) => console.log(error, "error"));

// PATCH
fetch(`https://jsonplaceholder.typicode.com/users/2`, {
  method: "PATCH",
  body: JSON.stringify({ id: 1, name: "New name for a user" }),
})
  .then((response) => response.json())
  .then((payload) => console.log(payload, "payload [PATCH]"))
  .catch((error) => console.log(error, "error"));

// DELETE
fetch("https://jsonplaceholder.typicode.com/users/1", { method: "DELETE" })
  .then((response) => {
    console.log(response.status, "delete status");
    return response.json();
  })
  .then((payload) => console.log(payload, "[DELETE]"));

// HEADERS

// Content-Type
// application/json
// text/html
// multipart/form-data

fetch("https://jsonplaceholder.typicode.com", {
  method: "GET",
  headers: { "Content-Type": "text/html" },
})
  .then((response) => response.text())
  .then((text) => console.log(text, "text"));

// Authorization

fetch("https://jsonplaceholder.typicode.com", {
  method: "GET",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data, "data with auth"));

//  Завдання:
// 1. Зробити запит на https://fakestoreapi.com/products
// 2. Вивести інформацію про продукти (товари)
// 3. Обробити помилки, передати headers (Сontent-Type)
// 4. Окремо протестувати запити через Thunder Client
