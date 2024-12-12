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

class Shop {}
class ShopItem {}
class ShopCart {}

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
