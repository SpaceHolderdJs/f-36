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

class CustomString extends String {
  #calledMethodsCount = 0;

  constructor(value) {
    super(value);
  }

  #detectMethodCall() {
    this.#calledMethodsCount++;
  }

  divide() {
    this.#detectMethodCall();

    const middle = Math.floor(this.length / 2);

    const part1 = this.slice(0, middle);
    const part2 = this.slice(middle);

    return [part1, part2];
  }

  analyze() {
    this.#detectMethodCall();

    const res = {};
    for (const char of this) {
      res[char] = res.hasOwnProperty(char) ? res[char] + 1 : 1;
    }
    return res;

    // return this.split("").reduce((acc, el) => {
    //   acc.hasOwnProperty(el) ? acc[el]++ : (acc[el] = 1);

    //   return acc;
    // }, {});
  }

  sort() {
    this.#detectMethodCall();

    return this.split("")
      .sort((e1, e2) => e1.localeCompare(e2))
      .join("");
  }
}

const customString = new CustomString("JavaScript");

const dividedCustomString = customString.divide();
console.log(dividedCustomString);

const analyzedString = customString.analyze();
customString.analyze();
console.log(analyzedString);

const sortedString = customString.sort();
console.log(sortedString);

console.log(customString);
