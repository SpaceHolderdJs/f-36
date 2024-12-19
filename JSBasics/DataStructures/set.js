// Set

Set;

const set = new Set([1, 2, 3, 4, 5, 5, 5, 5, undefined, undefined, null, null]);

set.add(10);
set.add(5);

// set.clear();
set.delete(null);
set.delete(undefined);

console.log(set.has(undefined), "has");

console.log(set);

const setFromString = new Set("hello world !");

setFromString.add(":)");

console.log(setFromString, "setFromString");

const setFromObject = new Set(Object.values({ a: 10, b: 100 }));

console.log(setFromObject);

const a = { a: 10 };

const setofObjects = new Set([{ a: 10 }, { a: 10 }, { a: 10 }, a, a]);
console.log(setofObjects, "setOfObject");

console.log(setofObjects.has({ a: 10 }));

const [firts, second, third] = set;
console.log(firts, second, third);
console.log(set[1]);

console.log([...set.values()][0]);

const array = [1, 2, 3, 4];
const set2 = new Set([1, 2, 3, 4]);

array[0];
array.at(0);

array[5] = 10;
set2[100] = 1;
set2.name = "Igor";
set2["new_key"] = "value";

console.log(set2[100]);

set2.add(5);

console.log(set2);

const set3 = new Set([1, 2, 3, 4, 5, 6, "string"]);

// set3[10] = 10;

set3.forEach((value) => {
  if (value > 3 || typeof value === "string") {
    set3.delete(value);
  }
  console.log(value);
});

console.log(set3);

console.log(set3.size);

for (const value of set3) {
  console.log(value, "value");
}

const values = [...set3.values()];

for (let i = 0; i < set3.size; i++) {
  console.log(values[i]);
}

for (const key in set3) {
  console.log(key, set3, "for - in");
}

const numbers = [1, 2, 6, 4, 2, 1];

// const uniques = Array.from(new Set(numbers));
const uniques = [...new Set(numbers)];

console.log(uniques);

const map = new Map();

map.set("id-1", new Set());

console.log(map);

map.get("id-1").add("good-id-1");

console.log(map);

class Server {
  static connections = new Set();
}

// Завдання:
// Дописати методи
// close, reopen  - закривають та відкривають підключення за допомогою Server.connections (Set)
// login, logout - використати методи Connection
// login - створити користувачеві connection (поле)

// Завдання:
// 1 - Додати id користувача (number)
// 2 - Додати до логіки Conncetion зберігання параметру id корисутвача
// connection-${user.id}

// 3 - Додати Admin як окремий класс (унаслідувати від User)
// 4 - Додати Admin (isAdmin: true) метод dicsonnectUser(userId) - відключає від серверу
// Якщо цей користувач також Admin - скасовує операцію

class Connection {
  constructor(n) {
    this.id = `connection-${n}`;
  }

  close() {
    Server.connections.delete(this.id);
  }

  open() {
    Server.connections.add(this.id);
  }
}

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.connection = null;
  }

  login(email, password) {
    if (email !== this.email || password !== this.password) {
      throw new Error("Login data is invalid");
    }

    this.connection = new Connection(Server.connections.size + 1);
    this.connection.open();
  }

  logout() {
    if (!this.connection) {
      throw new Error("Connection in not exist");
    }

    this.connection.close();
    this.connection = null;
  }
}

const user1 = new User("John", "email1@gmail.com", "password");

user1.login("email1@gmail.com", "password");
user1.login("email1@gmail.com", "password");
user1.login("email1@gmail.com", "password");

console.log(Server.connections);

user1.logout();

console.log(Server.connections);
