class Cart {
  static discount = 10;
  static allShopGoods = [{ name: "Iphone", price: 500 }];

  static changeDiscount = (discount) => {
    console.log("Static method");
    Cart.discount = discount;
  };

  constructor(data) {
    this.data = data;
  }

  changeDiscount(newDiscount) {
    console.log("Default method");
    Cart.discount = newDiscount;
  }

  buy() {
    console.log(Cart.discount, "discount");
  }
}

// Static
Cart.changeDiscount(100);

// Instance
const cart = new Cart({});
cart.changeDiscount(100);

class AdvancedCart extends Cart {
  static allShopGoods = [];

  static a = 100;

  constructor() {}
}

console.log(AdvancedCart.allShopGoods);
console.log(AdvancedCart.discount);
console.log(AdvancedCart.a);

// Завдання:
// описати класи слідуючи інструкції

// Shop -
// статичне поле catalog[{price, id, title}]

// ShopItem (Good)
// - збирає данні з Shop і створюється під кожен його товар
// - changePrice(newPrice)
// - changeTitle(newTitle)
// this

// ShopCart
// - static discount
// - items - інформація про покупки (ShopItem[])
// - buy(itemId) - додає товар в корзину
// - removeFromCart(itemId) - видаляє товар
// - proceedPayment(discount) - враховує знижку і рахує суму товарів (загальну) (console.table)
// this

// {title: "Pen", id: 1, price: 5}

class Shop {
  static catalog = [
    { id: 1, price: 300, title: "Gloves" },
    { id: 2, price: 700, title: "T-Shirt" },
    { id: 3, price: 500, title: "Jacket" },
  ];
}

class ShopItem {
  constructor(id, price, title) {
    this.id = id;
    this.price = price;
    this.title = title;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}

class ShopCart {
  static discount = 10;

  constructor(items = []) {
    this.items = items;
  }

  buy(item) {
    this.items.push(item);
  }

  remove(item) {
    this.items = this.items.filter(({ id }) => id !== item.id);
  }

  proceed(discount = ShopCart.discount) {
    const totalPrice = this.items.reduce(
      (total, { price }) => (total += price),
      0
    );

    const totalPriceAfterDiscount = totalPrice - (totalPrice * discount) / 100;

    console.log("Total checkout: ");
    console.table(this.items);
    console.log(`Total price: ${totalPrice} $`);
    console.log(`Discount: ${discount} %`);
    console.log(`Total: ${totalPriceAfterDiscount} $`);
  }
}

const items = Shop.catalog.map(
  ({ id, price, title }) => new ShopItem(id, price, title)
);

const homeworkCart = new ShopCart(items);

homeworkCart.items.at(0).changePrice(100000);
homeworkCart.items.at(1).changeTitle("New title");
console.log(homeworkCart.items.at(0));
console.log(homeworkCart.items.at(1));

homeworkCart.buy(new ShopItem(4, 300, "Socks"));
console.log(homeworkCart.items, "items after buy");

homeworkCart.remove(new ShopItem(4, 300, "Socks"));
console.log(homeworkCart.items, "items after remove");

homeworkCart.proceed(100);
