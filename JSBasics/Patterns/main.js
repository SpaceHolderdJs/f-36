// Patterns

// Fabric

function createUser(role = "user") {
  const defaultUserData = { name: "name", password: "password" };

  const usersByRoles = {
    user: defaultUserData,
    anonim: { ...defaultUserData, isAnonim: true },
    admin: { ...defaultUserData, isAdmin: true },
  };

  return usersByRoles[role] || usersByRoles["user"];

  //   if (role === "user") {
  //     return defaultUserData;
  //   } else if (role === "anonim") {
  //     return { ...defaultUserData, isAnonim: true };
  //   } else {
  //     return {
  //       ...defaultUserData,
  //       isAdmin: true,
  //     };
  //   }
}

const user = createUser("user");
const admin = createUser("admin");

console.log(user, admin);

class User {
  constructor() {
    this.name = "name";
    this.password = "password";
  }
}

class Admin extends User {
  constructor() {
    super();
    this.isAdmin = true;
  }
}

class Anonim extends User {
  constructor() {
    super();
    this.isAnonim = true;
  }
}

class UserFabric {
  constructor(role = "user") {
    switch (role) {
      case "admin": {
        return new Admin();
      }

      case "anonim": {
        return new Anonim();
      }

      case "user":
      default: {
        return new User();
      }
    }
  }
}

const anonim = new UserFabric("anonim");
console.log(anonim);

function component(tag, textContent, events = {}) {
  const element = document.createElement(tag);
  element.textContent = textContent;

  for (const event in events) {
    element[event] = events[event];
  }

  return { element, render: (parent) => parent.appendChild(element) };
}

function button(variant = "primary") {
  const buttonsByVariants = {
    primary: component("button", "Primary Button", {
      onclick: () => alert("Primary"),
    }),
    secondary: component("button", "Secondary Button", {
      onclick: () => alert("Secondary"),
    }),
    info: component("button", "Info Button", { onclick: () => alert("Info") }),
    warning: component("button", "Warning Button", {
      onclick: () => alert("Warning"),
    }),
    danger: component("button", "Danger", { onclick: () => alert("Danger") }),
  };

  return buttonsByVariants[variant] || buttonsByVariants["primary"];
}

[
  "primary",
  "secondary",
  "info",
  "warning",
  "danger",
  "unknown-button-element",
].forEach((buttonVariant) => {
  const buttonObject = button(buttonVariant);
  buttonObject.render(document.body);
});

// Singleton

function usersService() {
  if (!usersService.service) {
    usersService.service = {
      id: Math.floor(Math.random() * 10),
      create: (user) => usersService.users.push(user),
      update: (user) => {
        usersService.users = usersService.users.map((u) =>
          u.id === user.id ? user : u
        );
      },
      delete: (user) => {
        usersService.users = usersService.users.filter((u) => u.id !== user.id);
      },
    };
  }

  return usersService.service;
}

usersService.users = [];

const usersService1 = usersService();
console.log(usersService1, "usersService1");

usersService1.create({ id: 1, name: "Igor" });
console.log(usersService.users, "!!!");

usersService1.update({ id: 1, name: "Oleg" });
console.log(usersService.users, "!!!");

usersService1.delete({ id: 1, name: "Oleg" });
console.log(usersService.users, "!!!");

const usersService2 = usersService();
console.log(usersService2, "usersService2");

let API_SERVICE_INSTANCE = null;

class APIService {
  constructor(url, headers) {
    if (API_SERVICE_INSTANCE) return API_SERVICE_INSTANCE;

    this.url = url;
    this.headers = headers;

    API_SERVICE_INSTANCE = this;

    return this;
  }

  getRequest() {
    console.log("get request");
  }

  postRequest() {}
  patchRequest() {}
  putRequest() {}
  deleteRequest() {}
}

const apiService1 = new APIService("url", {});
console.log(apiService1, "apiService1");
apiService1.getRequest();
const apiService2 = new APIService("url2", {});
console.log(apiService2, "apiService2");
apiService2.getRequest();

// function onHover() {
//   console.log(this, "button");
//   const randomOffset = Math.floor(Math.random() * 500);
//   this.style.transform = `translateX(${randomOffset}px)`;
// }

function modal(content, options) {
  const { onOk, onCancel } = options;

  const createModalElement = () => {
    const element = document.createElement("div");

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    const modalFooter = document.createElement("div");

    modalBody.innerHTML = content;

    element.appendChild(modalBody);
    element.appendChild(modalFooter);

    const okButton = document.createElement("button");
    okButton.textContent = "Ok";
    okButton.onclick = onOk;

    // okButton.onmouseenter = onHover;

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = onCancel;

    modalFooter.appendChild(okButton);
    modalFooter.appendChild(cancelButton);

    document.body.appendChild(element);
    modal.element = element;
  };

  if (!modal.element) {
    createModalElement();
    return modal.element;
  }

  document.querySelector(".modal-body").innerHTML = content;

  return modal.element;
}

const modal1 = modal(`<h1>Hello</h1>`, {
  onOk: () => alert("Ok"),
  onCancel: () => alert("Cancel"),
});

const modal2 = modal(`<h2>Frontend</h2>`, {
  onOk: () => alert("Ok2"),
  onCancel: () => alert("Cancel2"),
});

// Завдання:
// 1. Використати паттерн фабрика на власному прикладі з Frontend (DOM) (до 3 варіацій)
// (function)
// 2. Використати паттерн Singleton на власному прикладі з даними (не fronted)
// (classes)
// object-based types (Array, Object, Functions, Map, Set)
