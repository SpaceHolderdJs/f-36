console.log(faker, "faker");

const generateUsersWithFaker = (quantity = 10) => {
  const users = [];

  for (let i = 0; i < quantity; i++) {
    const user = {
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      city: faker.address.city(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    };
    users.push(user);
  }
  return users;
};
const users = generateUsersWithFaker(20);
console.log(users);

const createUser = (user) => {
  users.push(user);
};

// Create user form

const createUserForm = document.forms["create-user-form"];

createUserForm.onsubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const { name, avatar, username, city, email } = createUserForm.elements;

  const newUser = {
    id: faker.datatype.uuid(),
    name: name.value,
    username: username.value,
    city: city,
    avatar: avatar.value,
    email: email.value,
  };

  createUser(newUser);

  Components.user.list(document.body).render(users);

  console.log(newUser, "newUser");
};

class Components {
  static user = {
    card: (parent) => {
      const render = (user) => {
        const { name, email, avatar } = user;

        parent.innerHTML += `
            <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <div class="mb-4">
                <img
                  src="${avatar}"
                  class="rounded-circle shadow-sm"
                  alt="User Avatar"
                />
              </div>
              <h5 class="card-title mb-1">${name}</h5>
              <p class="text-muted mb-3">${email}</p>
              <div class="d-grid">
                <button class="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      };

      return { render };
    },
    list: (parent) => {
      const inputElement = document.querySelector("#search-users-input");

      const search = (users, search) => {
        return users.filter((user) => user.name.includes(search));
      };
      const render = (usersToRender) => {
        const usersWrapper = document.querySelector("#users-content");
        usersWrapper.innerHTML = "";

        usersToRender.forEach((user) => {
          Components.user.card(usersWrapper).render(user);
        });
      };
      inputElement.oninput = (event) => {
        console.log(event.target.value);
        const usersResult = search(users, event.target.value);
        Components.user.list(document.body).render(usersResult);
      };
      return { render };
    },
  };
}

//Components.user.card(document.body).render(users[0]);
Components.user.list(document.body).render(users);
