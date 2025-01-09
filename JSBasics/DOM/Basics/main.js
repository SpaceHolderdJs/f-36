// DOM - Document Object Model

// window
// document

const button = document.getElementById("hello-button");

if (button) {
  button.textContent = button.textContent.toUpperCase();

  button.onclick = () => console.log("Hello");

  console.log(button);
}

function counter(elements, data = { counter: 0 }) {
  let counter = data.counter;

  if (elements["counter-presenter"]) {
    elements["counter-presenter"].textContent = counter;
  }

  if (elements.increase) {
    elements.increase.onclick = () => {
      counter++;
      elements["counter-presenter"].textContent = counter;
    };
  }

  if (elements.decrease) {
    elements.decrease.onclick = () => {
      counter--;
      elements["counter-presenter"].textContent = counter;
    };
  }
}

counter(
  {
    "counter-presenter": document.getElementById("counter-presenter"),
    increase: document.getElementById("increase"),
    decrease: document.getElementById("decrease"),
  },
  { counter: 5 }
);

// const counter2 = document.getElementById("counter-2");

// counter(
//   {
//     "counter-presenter": counter2.querySelector("#counter-presenter"),
//     increase: counter2.querySelector("#increase"),
//     decrease: counter2.querySelector("#decrease"),
//   },
//   { counter: 100 }
// );

const usersData = [
  { name: "Sarah Chen", age: 34, salary: 85000, role: "Senior Developer" },
  { name: "James Wilson", age: 28, salary: 62000, role: "UX Designer" },
  { name: "Maria Garcia", age: 41, salary: 115000, role: "Project Manager" },
  { name: "David Kim", age: 25, salary: 52000, role: "Junior Developer" },
  { name: "Lisa Thompson", age: 37, salary: 92000, role: "Product Owner" },
  { name: "Michael Brown", age: 45, salary: 125000, role: "Technical Lead" },
  { name: "Emma Davis", age: 31, salary: 78000, role: "QA Engineer" },
  { name: "Robert Taylor", age: 29, salary: 67000, role: "Frontend Developer" },
  { name: "Priya Patel", age: 33, salary: 88000, role: "Backend Developer" },
  { name: "John Murphy", age: 39, salary: 98000, role: "DevOps Engineer" },
];

function users(elements, data = { users: users }) {
  let users = data.users;

  const render = (elements, data) => {
    elements.users.innerHTML = "";

    data.forEach((usersData) => {
      const userCard = document.createElement("div");
      userCard.className = "another-class";
      userCard.classList.add("user-card");

      elements.users.appendChild(userCard);

      const onDelete = (name) => {
        users = users.filter((user) => user.name !== name);
        render(elements, users);
      };

      user({ card: userCard }, { ...usersData, onDelete });
    });
  };

  if (elements.users) {
    render(elements, users);
  }
}

users({ users: document.getElementById("users") }, { users: usersData });
// users({ users: document.getElementById("users-table") }, { users: usersData });

function user(elements, data) {
  const { age, name, role, salary, onDelete } = data;

  if (elements.card) {
    const h3 = document.createElement("h3");
    h3.textContent = `${name}, ${role}`;
    elements.card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = `Age: ${age}, salary: ${salary}`;
    elements.card.appendChild(p);

    const button = document.createElement("button");
    button.textContent = "Delete";
    elements.card.appendChild(button);

    button.onclick = () => {
      onDelete(name);
    };
  }
}

// Завдання:
const postsInfo = [
  { title: "P1", text: "T1", date: "2021-03-01", id: 1 },
  { title: "P2", text: "T2", date: "2021-06-01", id: 2 },
];
// Створити post та posts компоненти (див user та users)
// Відмалювати пости в HTML верстку
// Додати кнопку до посту (його картки), яка виведе alert з назвою посту на клік
// Стилізуйте пости css

function posts(elements, data) {
  const posts = data.posts;

  if (elements.posts) {
    posts.forEach((postData) => {
      const postCard = document.createElement("div");
      postCard.className = "post-card";
      post({ card: postCard }, postData);
      elements.posts.appendChild(postCard);
    });
  }
}

posts({ posts: document.getElementById("posts") }, { posts: postsInfo });

function post(elements, data) {
  const { title, text, date } = data;

  if (elements.card) {
    const h4 = document.createElement("h4");
    h4.textContent = title;
    elements.card.appendChild(h4);

    const p = document.createElement("p");
    p.textContent = text;
    elements.card.appendChild(p);

    const p1 = document.createElement("p");
    p1.textContent = date;
    elements.card.appendChild(p1);

    const button = document.createElement("button");
    button.textContent = "Show Info";
    elements.card.appendChild(button);

    button.onclick = () => alert(title);
  }
}

// new HTMLElement("");
// new HTMLParagraphElement();
// new HTMLButtonElement();

document.createElement("p");
