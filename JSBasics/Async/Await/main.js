// await, async

// new Promise((res, rej) => res(1)).then((res) => {
//   new Promise((res) => res()).then(() => {});
// });

// new Promise((res) => res(1))
//   .then((res) => {
//     return new Promise((res) => res());
//   })
//   .then(() => {});

class UsersAPI {
  static users = [
    { name: "Name1", city: "Kyiv" },
    { name: "Name2", city: "Lviv" },
  ];

  static getAllUsers = async () => {
    return UsersAPI.users;
  };

  static getUsersBy = async (criteria, value) => {
    if (!(criteria in UsersAPI.users[0])) {
      throw new Error(`${criteria} is not a part of the user`);
    }

    const users = await UsersAPI.getAllUsers();

    return users.filter((user) => user[criteria] === value);
  };

  static create = async (user) => {
    if (!user) throw new Error("No user exist");

    UsersAPI.users.push(user);

    return user;
  };
}

const getUsers = async (criteria, value) => {
  return await UsersAPI.getUsersBy(criteria, value);
};

const createUser = async (user) => {
  return await UsersAPI.create(user);
};

getUsers("city", "Lviv").then((users) => console.log(users, "users"));
getUsers("name", "Name1").then((users) => console.log(users, "users"));

createUser({ name: "Name3", city: "Odessa" }).then(async (user) => {
  const createdUser = await getUsers("city", "Odessa");
  console.log(createdUser, "user!!!");
});

const usersToCreate = [
  { name: "Name1", city: "Kyiv" },
  { name: "Name2", city: "Lviv" },
  { name: "Name3", city: "Odesa" },
  { name: "Name4", city: "Kharkiv" },
  { name: "Name5", city: "Dnipro" },
  { name: "Name6", city: "Zaporizhzhia" },
  { name: "Name7", city: "Vinnytsia" },
  { name: "Name8", city: "Poltava" },
  { name: "Name9", city: "Chernihiv" },
  { name: "Name10", city: "Cherkasy" },
];

const createUsers = async (users) => {
  for await (const user of users) {
    const createdUser = await UsersAPI.create(user);
    console.log(createdUser, "createdUser");
  }
};

createUsers(usersToCreate).then(() =>
  console.log(UsersAPI.users, "final users")
);
// Less preferable
// const getUsers2 = (city) => {
//   return UsersAPI.getAllUsers().then((users) => {
//     const filteredUsers = users.filter((user) => user.city === city);

//     return filteredUsers;
//   });
// };

// async function getPosts() {}

// class C {
//   async getUsers() {}
// }
