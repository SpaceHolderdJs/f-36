class Animal {
  constructor(name) {
    this.name = name;
  }

  greetings() {
    console.log(`Hello, my name: ${this.name}`);
  }

  walk() {
    console.log(`The ${this.name} is walking!`);
  }
}

const animal = new Animal("pet");
animal.greetings();

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  greetings() {
    console.log(`Meow - meow: ${this.name}`);
  }
}

const cat = new Cat("pet cat");
cat.greetings();
cat.walk();

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  greetings() {
    console.log(`Haw - haw: ${this.name}`);
  }
}

const dog = new Dog("pet dog");
dog.greetings();
dog.walk();

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`Fish ${this.name} is swimming`);
  }
}

const fish = new Fish("pet fish");
fish.swim();
