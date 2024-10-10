//  Завдання:
let count = 5;
let iterations = 7;

// написати цикл, який має збільшити count на 1 iterations разів
// for(let i = 0; i < iterations; i = i + 2)
// якщо count після змін більший за 10 - вивести "too much" - якщо ні - вивести "not enough"
// ternar ? :

for (let i = 0; i < iterations; i = i + 1) {
  count = count + 1;
}

console.log(count > 10 ? "too much" : "not enough");

const name = "Egor";

// Написати switch під 3 імені (Alina, Egor, Max)
// Виводьте name в кожному кейсі

switch (name) {
  case "Alina": {
    console.log(`Name is Alina`);
    break;
  }

  case "Egor": {
    console.log(`Name is Egor`);
    break;
  }

  case "Max": {
    console.log(`Name is Max`);
    break;
  }

  default: {
    console.log(`Name is not reconized`);
    break;
  }
}

function elevator() {
  let level = 1;
  const maxLevel = 20;
  let isLocked = false;

  //moveTo:5
  let command = "moveTo:5";

  switch (command) {
    case "down": {
      if (level <= 1 || isLocked) break;

      level = level - 1;
      break;
    }

    case "up": {
      if (level >= maxLevel || isLocked) break;

      level = level + 1;
      break;
    }

    case "open": {
      if (isLocked) break;

      console.log("Opening Elevator...");
      break;
    }

    case "lock": {
      if (isLocked) break;

      console.log("Elevator is getting locked");
      isLocked = true;
      break;
    }

    case "unlock": {
      if (!isLocked) break;

      console.log("Elevator is getting unlocked");
      isLocked = false;
      break;
    }

    // case command.startsWith("moveTo:1"): {
    //   console.log("Move to operation");
    //   level = 1;
    //   break;
    // }

    // case command.startsWith("moveTo:20"): {
    //   console.log("Move to operation");
    //   level = 20;
    //   break;
    // }

    default: {
      console.log(`This operation is not permitted`);
    }
  }

  console.log(level, isLocked);
}

elevator();

function elevator2() {
  let level = 0;
  const maxLevel = 20;
  let isLocked = false;

  //moveTo:5
  let command = "moveTo:8";

  if (command === "up") {
    if (level < maxLevel && !isLocked) level = level + 1;
  } else if (command === "down") {
    if (level > 1 && !isLocked) level = level - 1;
  } else if (command === "open") {
    if (!isLocked) console.log("Opening Elevator...");
  } else if (command === "lock") {
    if (!isLocked) isLocked = true;
  } else if (command === "unlock") {
    if (isLocked) isLocked = false;
  } else if (command.startsWith("moveTo")) {
    if (!isLocked && command.includes(":")) {
      const indexOfSeparator = command.indexOf(":");
      const levelToMoveAsString = command.slice(indexOfSeparator + 1);
      const levelToMove = +levelToMoveAsString;

      if (levelToMove <= maxLevel && levelToMove >= 1) {
        level = levelToMove;
      } else {
        console.log("This level is not reachable");
      }
      //   level = Number(levelToMove);
      //   level = +levelToMove;
      //   level = parseInt(levelToMove);
    }
  } else {
    console.log(`This operation is not permitted`);
  }

  console.log("IF", level, isLocked);
}

elevator2();

// Завдання:
// Написати логіку руху автомобіля

// commands: "forward" + 100, "backwards - 100", "stop" - console.log, addFluel:число
// Кожні 100 метрів - 10 літрів fluel
// Якщо бензину нема - ви не їдете

// Використати підхід elevator за основу

function car() {
  let distance = 0;
  let fluel = 60;

  const maxFluel = 70;

  const command = "addFluel:5";

  if (command === "forward") {
    if (fluel >= 10) {
      distance = distance + 100;
      fluel = fluel - 10;
    } else {
      console.log("Fluel is empty");
    }
  } else if (command === "backwards") {
    if (fluel >= 10) {
      distance = distance - 100;
      fluel = fluel - 10;
    } else {
      console.log("Fluel is empty");
    }
  } else if (command === "stop") {
    console.log("Car was stopped");
  } else if (command.startsWith("addFluel")) {
    const indexOfTwoDots = command.indexOf(":") + 1;
    const fluelToAddAmount = +command.slice(indexOfTwoDots);

    if (fluel + fluelToAddAmount <= maxFluel) {
      fluel = fluel + fluelToAddAmount;
    } else {
      console.log("This fluel amount will not fit");
    }
  } else {
    console.log("Command is not valid");
  }

  console.log(`Distance: ${distance}, fluel: ${fluel}`);
}

car();
