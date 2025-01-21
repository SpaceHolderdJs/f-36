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

let isSorted = false;

const createUser = (user) => {
  users.push(user);
};

// Create user form

const createUserForm = document.forms["create-user-form"];

createUserForm.onsubmit = (event) => {
  event.preventDefault();

  const { name, avatar, username, city, email } = createUserForm.elements;

  const newUser = {
    id: faker.datatype.uuid(),
    name: name.value,
    username: username.value,
    city: city.value,
    avatar: avatar.value,
    email: email.value,
  };

  createUser(newUser);
  Componets.user.list(document.body).render(users);

  console.log(newUser, "newUser");
};

class Componets {
  static user = {
    card: (parent) => {
      const render = (user) => {
        const { name, email, avatar } = user;

        parent.innerHTML += `
          <div class="container py-2">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <div class="mb-4">
                      <img
                        src="${avatar}"
                        class="rounded-circle shadow-sm"
                        style="width: 80px; height: 80px; object-fit: "cover";"
                        alt="User Avatar"
                      />
                    </div>
                    <h5 class="card-title mb-1">${name}</h5>
                    <p class="text-muted mb-3">${email}</p>
                    <div class="d-grid">
                      <button class="btn btn-danger">Delete Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      };

      return { render };
    },

    list: (parent) => {
      const inputElement = document.querySelector("#search-users-input");
      const sortButton = document.querySelector("#sort-users-button");

      const search = (users, search) => {
        return users.filter(({ name, email, username }) =>
          [name, email, username]
            .map((criteria) => criteria.toLowerCase())
            .some((criteria) => criteria.includes(search.toLowerCase()))
        );
      };

      const sort = (users) => {
        const sortedUsers = users.toSorted((u1, u2) =>
          !isSorted
            ? u1.name.localeCompare(u2.name)
            : u2.name.localeCompare(u1.name)
        );

        return sortedUsers;
      };

      const render = (usersToRender) => {
        const usersWrapper = document.querySelector("#users-content");
        usersWrapper.innerHTML = "";

        usersToRender.forEach((user) => {
          Componets.user.card(usersWrapper).render(user);
        });
      };

      inputElement.oninput = (event) => {
        const usersResult = search(users, event.target.value);
        Componets.user.list(document.body).render(usersResult);
      };

      sortButton.onclick = () => {
        isSorted = !isSorted;
        console.log(isSorted, "isSorted");
        const sortedUsersResult = sort(users);
        Componets.user.list(document.body).render(sortedUsersResult);
      };

      return { render };
    },
  };
}

Componets.user.list(document.body).render(users);

// H/W
// Завдання
// написати логіку видалення користувача (кожна картка має свою кнопку видалення)
// На клік на кнопку користувач має видалятися (deleteUser - створити функцію)

//  Переписати метод render компонента user
//  - Створити кнопку виключно за допомогою document.createElement
//  - Запрограмувати кнопку на видалення
//  - Додати кнопку у верстку кожної картки
//  - Видаляти користувача за id
//  - Перемальовувати компонент (render)
//  Componets.user.card(usersWrapper).render(user);

// Додати стандартну картинку для користувача (поки faker не працює)

// За бажанням офрмити вивід карток (по 2-3 у лінію)
// main.css
// lit-html - розширення для роботи з HTML у JS
