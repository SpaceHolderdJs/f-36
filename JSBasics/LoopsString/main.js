// Loops

const str1 = "";
const str2 = "";
const str3 = ``;
const str4 = new String("String");

const str5 = "Hello llll";

console.log(str4);

let str6 = "";

// console.log(str4[0]);
// console.log(str4[1]);
// console.log(str4[2]);
// console.log(str4[3]);
// console.log(str4[4]);
// console.log(str4[5]);

for (const letter of str5) {
  str6 = str6.concat(letter);

  const isLetterL = "l".includes(letter);

  if (isLetterL) {
    console.log(letter);
  }

  //   document.body.innerHTML += `<span>${letter}</span>`;
}

console.log(str6, str5);

const isUserAdmin = true;

if (isUserAdmin) {
  console.log("User is admin");
}

// Завдання:
//
const str7 = "JavaScript";

// вивести кожну літеру строки str7

// Завдання:
const str8 = "Python";

// вивести лише літеру o з усіх літер (for of) + if

const str9 = "This is the message";
const letterToCount = "s";

let counter = 0;

for (const letter of str9) {
  const isLetterToCount = letterToCount.includes(letter);

  if (isLetterToCount) {
    counter = counter + 1;
  }
}

console.log(`Letter ${letterToCount} was counted ${counter} times`);

const str10 = "I am a programmer";

// якщо символів більше за 5 - шифруємо
// шифр включає дубляж кожної літери
// "hello" -> "hheelllloo"

if (str10.length >= 5) {
  let result = "";
  const repeatQuantity = 5;

  for (const letter of str10) {
    result = result + letter.repeat(repeatQuantity);
  }

  console.log(result);
}

const str11 = "Hello";
const letterToChange = "o";
const replacementLetter = "*";

let result = "";

// замінити всі letterToChange на replacementLetter (for of)

for (const letter of str11) {
  const isLetterToChange = letterToChange.includes(letter);

  if (isLetterToChange) {
    result = result + replacementLetter;
  } else {
    result = result + letter;
  }
}

console.log(result);

const str12 = "hheelloo";

// (for of)

// => hello;
