// while

let amount = "low";
let counter = 0;

while (amount === "low") {
  counter++;

  console.log(counter);

  if (counter >= 5) {
    amount = "high";
    console.log("Let's finish that");
  }
}

// for (let i = 0; i < 20; i++) {}

let counter2 = 10;

while (true) {
  counter2 = counter2 - 1;

  if (counter2 < -1) {
    console.log("Breaking the loop");
    console.log(counter2);
    break;
  }
}

// Defines a dialog for a user
// alert(100);

// let name = prompt("Enter your name");
// console.log(name);

// while (!Boolean(name)) {
//   name = prompt("Enter your name");
// }

// alert(`Your name is ${name}`);

const number = Math.floor(Math.random() * 5);

let guess = prompt("Guess a number from 1 to 10");

while (number !== +guess) {
  guess = prompt(`Wrong, try again...`);
}

alert(`You are right! The number was ${number}`);

// while (true) {
//   guess = prompt("Wrong, try again...");
//   if (number === +guess) {
//     break;
//   }
// }
