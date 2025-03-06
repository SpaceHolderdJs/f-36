// Example 1
const counterElement = document.querySelector("#counter");

const increaseButtonElement = document.querySelector("#increase-btn");
const decreaseButtonElement = document.querySelector("#decrease-btn");

let counter = 0;

increaseButtonElement.onclick = () => {
  counter++;
  counterElement.textContent = counter;
};

decreaseButtonElement.onclick = () => {
  counter--;
  counterElement.textContent = counter;
};

// Example 2

const usersElement = document.querySelector("#users");
const loadUsersButton = document.querySelector("#load-users-btn");
const usersQuantity = document.querySelector("#users-quantity");

const loadUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return users;
};

const renderUsers = (users) => {
  usersQuantity.textContent = users.length;

  users.forEach((user) => {
    usersElement.innerHTML += `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        </div>
        `;
  });
};

loadUsersButton.onclick = async () => {
  const users = await loadUsers();
  renderUsers(users);
};
