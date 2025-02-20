// Storages
// import { jwtDecode } from "https://cdn.jsdelivr.net/npm/jwt-decode@4.0.0/+esm";

localStorage;
sessionStorage;

const key = "name";
const value = "Igor";

localStorage.setItem(key, value);
localStorage.setItem("number", 100);

const user = {
  name: "Igor",
  number: 100,
};

const jsonObject = JSON.stringify(user);
localStorage.setItem("user", jsonObject);

const valueFromLs = localStorage.getItem("name");
console.log(valueFromLs, "valueFromLs");

console.log(Number(localStorage.getItem("number")), "number");

const userFromLs = localStorage.getItem("user");

// if (userFromLs) {
const parsedUser = JSON.parse(userFromLs);
console.log(parsedUser, "parsedUser");
console.log(parsedUser.name);
// }

console.log(localStorage.length, "length");

localStorage.setItem("name", "Oleg");

localStorage.removeItem("name");

// localStorage.clear();

// JSON

class LocalStorageService {
  static getItem(key, type) {
    const value = localStorage.getItem(key);

    if (!value) return "";

    if (type === "object") {
      return JSON.parse(value);
    }

    return value;
  }

  static setItem(key, value) {
    if (!key || !value) return;

    if (typeof value === "object") {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
      return value;
    }

    localStorage.setItem(key, value);
    return value;
  }
}

const user2 = LocalStorageService.getItem("user", "object");
const user3 = LocalStorageService.getItem("useruseruser", "object");
console.log(user2, "user2");
console.log(user3, "user3");

const savedData = LocalStorageService.setItem("car", {
  brand: "Ford",
  price: 1000000,
});

console.log(savedData, "savedData");

const primitive1 = LocalStorageService.setItem("test-n", 10);
console.log(+LocalStorageService.getItem("test-n"), "test-n value");

// Session storage

sessionStorage.setItem("key", "value");
// sessionStorage.removeItem("key");

const valueFromSessionStorage = sessionStorage.getItem("key");
console.log(valueFromSessionStorage, "valueFromSessionStorage");

sessionStorage.clear();

fetch("https://fakestoreapi.com/auth/login", {
  method: "POST",
  body: JSON.stringify({
    username: "mor_2314",
    password: "83r5^_",
  }),
  headers: {
    "content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    // const { sub: userId } = jwtDecode(data.token);
    const { sub: userId } = jwt_decode(data.token);

    console.log(userId, "user");

    LocalStorageService.setItem("token", data.token);
    LocalStorageService.setItem("userId", userId);
  });

console.log();

// H/W
// 1.
