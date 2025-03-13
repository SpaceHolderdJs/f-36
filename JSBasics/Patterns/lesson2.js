// Observer

function observer() {
  observer.events = {
    // "click": [(data) => {}, (data) => {}, (data) => {}]
  };

  return {
    on: function (event, listener) {
      if (!observer.events[event]) {
        observer.events[event] = [];
      }
      observer.events[event].push(listener);
    },
    emit: function (event, data) {
      if (!observer.events[event]) {
        throw new Error(`Event ${event} is not registered in the stack`);
      }
      observer.events[event].forEach((listener) => listener(data));
    },
  };
}

const observer1 = observer();

observer1.on("ping", () => {
  console.log("Ping event accepted");
});

observer1.on("ping", () => {
  console.log("Ping event accepted 2");
});

observer1.emit("ping");

try {
  observer1.emit("unknown_event");
} catch (err) {
  console.warn(err);
}

observer1.on("login", (loginData) => {
  console.log("Email", loginData.email);
  console.log("Password", loginData.password);
});

observer1.on("login", (data) => {
  console.log(data, "data");
  // window.location.href += "/products";
});

observer1.emit("login", { email: "email@gmail.com", password: "password" });

class Observer {
  constructor(events = {}) {
    this.events = events;
  }

  on(event, listenerFunc) {
    if (this.events[event]) {
      this.events[event].push(listenerFunc);
      return;
    }

    this.events[event] = [listenerFunc];
  }

  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach((listenerFunc) => listenerFunc(data));
  }
}

const observer2 = new Observer();

// observer2.on("click", () => {
//   alert("Click");
// });

// observer2.on("click", () => {
//   alert("Click2");
// });

// observer2.emit("click");

class Calculator {
  #observer;
  constructor(prevResults = []) {
    this.prevResults = prevResults;

    this.#observer = new Observer();
    this.registerObservers();
  }

  registerObservers() {
    this.#observer.on("+", (args) => {
      const [arg1, arg2] = args;
      const result = arg1 + arg2;

      this.prevResults.push(result);
      return result;
    });

    this.#observer.on("-", (args) => {
      const [arg1, arg2] = args;
      const result = arg1 - arg2;

      this.prevResults.push(result);
      return result;
    });

    this.#observer.on("*", (args) => {
      const [arg1, arg2] = args;
      const result = arg1 * arg2;

      this.prevResults.push(result);
      return result;
    });

    this.#observer.on("/", (args) => {
      const [arg1, arg2] = args;
      const result = arg1 / arg2;

      this.prevResults.push(result);
      return result;
    });
  }

  add(a, b) {
    this.#observer.emit("+", [a, b]);
    return this.prevResults.at(-1);
  }

  diff(a, b) {
    this.#observer.emit("-", [a, b]);
    return this.prevResults.at(-1);
  }

  multiply(a, b) {
    this.#observer.emit("*", [a, b]);
    return this.prevResults.at(-1);
  }

  divide(a, b) {
    this.#observer.emit("/", [a, b]);
    return this.prevResults.at(-1);
  }
}

const calculator1 = new Calculator();

// calculator1.observer.emit("+", [1, 2]);
// console.log(calculator1.prevResults.at(-1), "+");

// const prevResult = calculator1.prevResults.at(-1);
// calculator1.observer.emit("-", [prevResult, 1]);
// console.log(calculator1.prevResults.at(-1), "-");
// console.log(calculator1.prevResults);

// calculator1.observer.emit("*", [10, 10]);
// console.log(calculator1.prevResults.at(-1), "*");

// calculator1.observer.on("+", (args) => {
//   calculator1.prevResults.pop();
//   calculator1.prevResults.push(args[0] * args[1]);
// });

// calculator1.observer.emit("+", [1, 1]);
// console.log(calculator1.prevResults.at(-1));

const sum = calculator1.add(1, 1);
const diff = calculator1.diff(10, 9);
const multiply = calculator1.multiply(10, 10);
const divide = calculator1.divide(100, 10);

console.log("Safe operations", sum, diff, multiply, divide);

// Decorator
function Coffee() {
  this.cost = function () {
    return 75;
  };
}

function MilkDecorator(coffee) {
  const originalCost = coffee.cost;
  coffee.cost = function () {
    return originalCost() + 15;
  };
  coffee.withMilk = true;

  return coffee;
}

function SugarDecorator(coffee) {
  const originalCost = coffee.cost;
  coffee.cost = function () {
    return originalCost() + 5;
  };
  coffee.withSugar = true;

  return coffee;
}

const coffee = new Coffee();
MilkDecorator(coffee);
// SugarDecorator(coffee);

console.log(coffee, coffee.cost());

// console.log(new Coffee().cost());

class User {
  constructor(name, surname, isAdmin) {
    this.name = name;
    this.surname = surname;
    this.isAdmin = isAdmin;
  }

  login() {
    console.log(`User ${this.name} is logging in`);
  }
}

const user = new User("igor", "sergienko", false);

function CapitalCaseCredentialsDecorator(user) {
  const prevName = user.name;
  const prevSurName = user.surname;

  user.name = `${prevName[0].toUpperCase()}${prevName.slice(1)}`;
  user.surname = `${prevSurName[0].toUpperCase()}${prevSurName.slice(1)}`;

  return user;
}

function AdminDecorator(user) {
  user.isAdmin = true;

  user.login = function () {
    console.log(`Admin ${user.name} is logging in`);
  };

  return user;
}

CapitalCaseCredentialsDecorator(user);
AdminDecorator(user);
console.log(user);
user.login();

// Завдання:
// 1. Використати паттерн Observer на власному прикладі (DOM, Events)
// button -> onclick
// button -> ondblclick
// button -> onmouseenter
// 2-3 події

// 2. Використати паттерн Decorator на власному прикладі (JS)
// 1-2 декоратори
