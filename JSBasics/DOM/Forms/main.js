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

class Componets {
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
          </div>
        `;
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
          Componets.user.card(usersWrapper).render(user);
        });
      };

      inputElement.oninput = (event) => {
        console.log(event.target.value);
        const usersResult = search(users, event.target.value);
        Componets.user.list(document.body).render(usersResult);
      };

      return { render };
    },
  };
}

// Componets.user.card(document.body).render(users[0]);
Componets.user.list(document.body).render(users);

// H/W

// У list:

// 1. Додати до пошуку відсутність залежності від регістру

// 2. Додати до специфіки пошуку поля email, username
// АБО name, АБО email, AБО username

// 3. Дописати механіку sort користувачів за алфавітом (ростання) (name)
// - створити функцію sort
// - використати render() для перемальовки
// - sort може працювати за кнопкою
