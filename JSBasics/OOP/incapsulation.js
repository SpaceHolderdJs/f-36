class Car {
  #vin;
  #keys = ["abc-cd-ee", "zas-dsa-as"];
  #isLocked = true;

  constructor(name, price, vin) {
    this.name = name;
    this.price = price;
    this.#vin = vin;

    this.#unlock(this.#keys[0]);
  }

  setVin(newVin) {
    this.#vin = newVin;
  }

  getVin() {
    return this.#vin;
  }

  #unlock(keyId) {
    if (this.#keys.includes(keyId)) {
      this.#isLocked = false;
      console.log("This car was unlocked", this);
    } else {
      throw new Error("This is not my key");
    }
  }

  addKey(keyId) {
    this.#keys.push(keyId);
  }
}

const car = new Car("Ford", 15000, "12121h21h21j2h1j2h12h1j");

car.addKey("asas-sasasa-asasasasa-sasa");

console.log(car);

// Might be an Error
// console.log(car.#vin);

console.log(car);
car.setVin("new vin code");
console.log(car);

console.log(car.getVin());

class Car2 extends Car {
  #isLocked = {};
  #key = [];

  constructor(name, price, vin) {
    super(name, price, vin);
  }
}

const car2 = new Car2("Ferarri", 1500000, "aaaaaaa-aaaa-aaaa-aaaa-a");

console.log(car2, "car2");

car2.setVin("bbbbbb-bbbb-bbb-bb");
console.log(car2);

car2.addKey("mmmm-mmm-mmm-mmm-mmmm-m");
console.log(car2);

// Завдання:

// унаслідувати String
// додати приватне поле #calledMethodsCount = 0;
// описати наступні методи:

// 1. divide() => повертає масив з 2 елементів, де строка розділилася навпіл
// "JavaScript".divide() => ["JavaS", "cript"]

// 2. analyze() => повертає об`єкт з усіма символами сторки за кількістю
// "he he".analyze() => {h: 2, e: 2, " ": 1}

// 3. sort() => cортує всі елементи строки за алфавітом

// calledMethodsCount має рахувати кожен виклик з усіх цих методів
