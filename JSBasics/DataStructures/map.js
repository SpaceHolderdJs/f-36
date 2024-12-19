// []
// {}

// Map

Map;

const map = new Map([
  ["a", 11],
  ["b", 13],
  [{}, {}],
]);

map.set("name", "Igor");
map.set("items", [1, 2, 3, 4, 5, 6, 7]);
map.set("name", "Oleg");

const o1 = { a: 10 };
const o2 = { a: 10 };

map.set(o1, 1);
map.set({ a: 10 }, 2);
map.set({ a: 10 }, 3);
map.set(o1, 4);

map.set(
  [].find((e) => e === 10),
  "11-05-2021"
);
map.set(undefined, "11-07-2021");
map.set(undefined, "11-07-2023");

map.set("v", 0);

map.set(null, "Hello");
map.set(NaN, "NaN");

console.log(map.get("null"));

console.log(map.has(null));
console.log(map.has(o1));

console.log(map.has("key"));
console.log(Boolean(map.get("key")));

console.log(Boolean(map.get("v")));
console.log(map.has("v"));
console.log(map.has({ a: 10 }));

// console.log(map.clear());

console.log(map.delete("v"), "delete");
console.log(map.delete(o1), "delete 2");

console.log(map, "after delete");

console.log([...map.keys()], "keys");
console.log([...map.values()], "values");

console.log(map.size, "size");

map.forEach((value, key) => {
  console.log(value, key, "forEach");

  if (key !== null && typeof key === "object" && key.hasOwnProperty("a")) {
    map.delete(key);
  }
});

console.log(map);

// const entries = Object.entries({ a: 10, b: 20 });
// console.log(entries, "entries");

// const obj = Object.fromEntries([
//   ["a", 10],
//   ["b", 12],
// ]);

// console.log(obj, "fromEntries");

console.log(map);

class Shop {
  static visitors = new Map();
}

class Visitor {
  constructor(name, budget, discount) {
    this.name = name;
    this.budget = budget;
    this.discount = discount / 100;
  }

  visit() {
    Shop.visitors.set(this, []);
  }

  leave() {
    const userCart = Shop.visitors.get(this);

    if (userCart.length > 0) {
      throw new Error("Please pay for items before leave");
    }

    Shop.visitors.delete(this);
  }

  buy(shopItem) {
    // Завдання
    // Дописати метод (buy)
    // який додасть до корзини конкретного Visitor (this)
    // товар як еземпляр ShopItem

    if (!Shop.visitors.has(this)) return;

    if (Boolean(this.discount)) {
      shopItem.discount(this.discount);
    }

    this.budget = this.budget - shopItem.price;

    Shop.visitors.get(this).push(shopItem);

    if (this.budget >= 0) {
      const goodsBefore = Shop.visitors.get(this);

      const goodsWithoutCurrent = goodsBefore.filter(
        ({ title }) => title !== shopItem.title
      );

      Shop.visitors.set(this, goodsWithoutCurrent);
    }
  }

  registerAdmin() {
    return new ShopAdmin(this.name);
  }
}

class ShopAdmin extends Visitor {
  constructor(name) {
    super(name, 0, 0);
    this.isAdmin = true;

    this.clearCart();
  }

  clearCart() {
    const isAlreadyBuyingSomething = Shop.visitors.has(this);

    if (isAlreadyBuyingSomething) {
      Shop.visitors.set(this, []);
    }
  }

  buy() {
    throw new Error("Admin can not buy");
  }

  closeShop() {
    const visitorsQuantity = [...Shop.visitors.keys()].filter(
      (visitor) => !visitor.isAdmin
    ).length;

    const isAtLeastOneAdminThere = [...Shop.visitors.keys()].some(
      (visitor) => visitor.isAdmin
    );

    if (!isAtLeastOneAdminThere) {
      throw new Error("There is no admin in the shop");
    }

    if (visitorsQuantity === 0) {
      Shop.visitors.clear();
      console.log("The shop was closed");
    } else {
      throw new Error("There is a visitor");
    }
  }
}

class ShopItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  discount(d) {
    this.price = this.price - this.price * d;
  }
}

const visitor1 = new Visitor("Igor", 3000, 10);
const visitor2 = new Visitor("Alina", 2500, 15);

visitor1.visit();
visitor2.visit();

const admin1 = visitor1.registerAdmin();

admin1.visit();

visitor1.leave();
visitor2.leave();

admin1.closeShop();

console.log(admin1, "admin1");

visitor1.buy(new ShopItem("Socks", 200));

console.log(Shop.visitors, "visitor");

// H/W

// 1- Додати логіку видалення товару з корзини після оплати (buy)
// 2- У методі leave (Visitor) додати логіку перевірки того, що корзитна пуста
// 3- Додати перевірки budget (усюди де буде потрібно (на ваш розсуд))
// 4- Додати то Visitor метод registerAdmin (корзина завджи пуста) (isAdmin: true)
// Такий користувач не може купляти (поліморфізм, наслідування),
// Додати метод до Admin closeShop (якщо нема відвідувачів) - закриває магазин

// {a: 10}

// {user: {}}

// {{}:{}}

// Set
