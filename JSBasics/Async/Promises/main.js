// Promise

const n = 100;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (n < 50) {
      console.log("Promise was working 3 secs");
      return resolve(":)");
    }

    console.log("Promise was working 3 secs");
    return reject("n is not lower then 50");
  }, 3000);
});

console.log(promise, "promise");

setTimeout(() => console.log("4 seconds after"), 4000);

// Завдання:

// Створити Promise
// Який буде повертати resolve через 1 секунду ("Resolved")

new Promise((res, rej) => {
  setTimeout(() => rej("Rejected"), 1000);
})
  .then((result) => {
    console.log(result, "result");
  })
  .catch((error) => {
    console.log(error, "error");
  })
  .finally(() => {
    console.log("finally");
  });

// Promise Methods
new Promise(() => {}).then();
new Promise(() => {}).catch();
new Promise(() => {}).finally();

const pr1 = new Promise((res) => {
  res(1);
});

const pr2 = new Promise((res, rej) => {
  res(2);
});

const pr3 = new Promise((res) => {
  res(3);
});

[pr1, pr2, pr3].forEach((promise) => {
  promise
    .then((res) => console.log(res, "res of the promise from the foreach"))
    .catch((err) => console.log(err));
});

Promise;

Promise.all;
Promise.race;

// Resolved Promise
const finalPromise = Promise.all([pr1, pr2, pr3]).then((result) =>
  console.log(result)
);

// Rejected Promise
const rejectedFinalPromise = Promise.all([
  pr1,
  new Promise((res, rej) => rej("Error: promise all")),
  pr3,
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally: promise all"));

const promises2 = [
  new Promise((res, rej) => rej("Error: promise race")),
  pr1,
  pr3,
];

Promise.race(promises2)
  .then((result) => console.log(result, "result: promise race"))
  .catch((err) => console.log(err));

class Car {
  static win(winner) {
    console.log(
      `The Winner is ${winner.name} ${winner.plate} with the speed ${winner.speed}. Time: ${winner.aproximateRaceTime}`
    );
  }

  constructor(name, speed, color, plate) {
    this.name = name;
    this.speed = speed;
    this.color = color;
    this.plate = plate;
  }

  race() {
    const aproximateRaceTime =
      500 + Math.floor(Math.random() * 5000) - this.speed;
    this.aproximateRaceTime = aproximateRaceTime;

    return new Promise((res) => {
      setTimeout(() => res(this), aproximateRaceTime);
    });
  }
}

// Завдання:
// Використовуючи class Car та Promise.all
// Зібрати статистику про всіх учасників перегонів
// Відсортувати їх у порядку зростання часу (aproximateRaceTime)
// Вивести у формі таблиці, або масиву

// Наслідувати клас Car -> SportCar
// така машина має прибувати на 20% швидше
// Провести ще одні перегони зі спортивними машинами (Promise.all, Promise.race)

// const testCar = new Car("Car1", 240, "black", "AA 1212 CD");

// testCar.race().then((winner) => {
//   // [Todo]: Check
//   const winnerCar = { ...winner };
//   console.log(
//     `The Winner is ${winner.name} ${winner.plate} with the speed ${winner.speed}. Time: ${winner.aproximateRaceTime}`
//   );
// });

// Завдання:
// За допомгою Promise.race створити кілька автомобілей
// та реалізувати перегони (метод race автомобіля повертає Promise)

const racers = [
  new Car("Car1", 200, "grey", "AA 1121 BB"),
  new Car("Car2", 240, "black", "AA 1521 BC"),
  new Car("Car3", 260, "black", "AA 1528 BC"),
];

const racesPromises = racers.map((racer) => racer.race());

Promise.race(racesPromises).then((winner) =>
  console.log(
    `The Winner is 
    ${winner.name} ${winner.plate}
    with the speed ${winner.speed}. 
    Time: ${winner.aproximateRaceTime}`
  )
);

Promise.allSettled([
  pr1,
  pr3,
  new Promise((res, rej) => rej("Rejected from allSttled")),
]).then((res) => console.log(res, "allSettled Result"));

// 1. Race statics
Promise.all(racesPromises).then((results) => {
  console.log(results, "results!!!");

  const sortedRacers = results.toSorted(
    (c1, c2) => c1.aproximateRaceTime - c2.aproximateRaceTime
  );

  console.log(sortedRacers, "sortedRacers");
  console.table(sortedRacers);
});

class SportCar extends Car {
  constructor(name, speed, color, plate) {
    super(name, speed, color, plate);
  }

  race() {
    const aproximateRaceTime =
      500 + Math.floor(Math.random() * 5000) - this.speed;

    this.aproximateRaceTime = aproximateRaceTime - aproximateRaceTime * 0.2;

    return new Promise((res) => {
      setTimeout(() => res(this), this.aproximateRaceTime);
    });
  }
}

const sportCars = [
  new SportCar("Sport car 1", 300, "black", "xxxxxxxxx"),
  new SportCar("Sport car 2", 310, "blue", "xxxxxxxxx"),
  new SportCar("Sport car 3", 400, "green", "xxxxxxxxx"),
];

const sportCarsRacePromises = sportCars.map((car) => car.race());

// race
Promise.race(sportCarsRacePromises).then((winner) => {
  console.log(winner, "sport winner");
  SportCar.win(winner);
});

// all

Promise.all(sportCarsRacePromises).then((results) => {
  console.table(results, "results (sport)");
});
