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

function a() {
  const str12 = "hheelllloo";

  let result = "";
  let currentLetter = "";

  for (const letter of str12) {
    const wasLetterBefore = currentLetter.includes(letter);

    if (wasLetterBefore) {
      result = result.concat(letter);
    }

    currentLetter = letter;
  }

  console.log(result, str12);
}

a();

function b() {
  const str = "hheelllloo";

  let result = ""; // cюди складайте результат (по одній літері)
  let dublicateLetter = ""; // це та літера, що зараз повторюється (h, e, l, o)

  for (const letter of str) {
    // Якщо літера відрізняється від останньої доданої в результат,
    // то додаємо її до результату
    if (letter !== dublicateLetter) {
      result += letter; // Додаємо літера до результату
    }

    // Встановлюємо дублікат письмової літери на поточну
    dublicateLetter = letter;
  }

  console.log(result, "result from AI"); // Виведе "hello"
}

b();

const str13 = "String";

console.log(str13.length);

for (let i = 0; i < 10; i = i + 1) {
  console.log(i, "index");
}

console.log(str13.length);

for (const letter of str13) {
  console.log(letter);
}

for (let i = 0; i < str13.length; i = i + 1) {
  console.log(str13[i]);
}

const str14 = "hheelllloo";
let result1 = "";

for (let i = 0; i < str14.length; i = i + 2) {
  result1 = result1 + str14[i];
}

console.log(result1, "result");

// Завдання:

const str15 = "Kotlinnnnnnnnnnn";
let counter1 = 0;

// використати цикл for з лічильником щоб порахувати кількість літер n

for (let i = 0; i < str15.length; i = i + 1) {
  const isNLetter = "n".includes(str15[i]);

  if (isNLetter) {
    counter1 = counter1 + 1;
  }
}

console.log(counter1);

const str16 = "Kotlin";
let result2 = 0;

for (let i = 0; i < str16.length; i = i + 1) {
  if ("n".includes(str16[i])) {
    console.log(str16[i]);
    result2 = result2 + 1;
  }
}
console.log(result2, "result");
