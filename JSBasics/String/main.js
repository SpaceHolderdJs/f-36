// String

const str1 = "Hello";

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Indexing

const zero = 0;

console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
console.log(str1[4]);

console.log(str1[zero]);

console.log(str1.slice(0, 4));
console.log(str1.slice(1, 3));

const name = "igor";
const nameFromCapital = name[0].toUpperCase() + name.slice(1);

console.log(nameFromCapital);

const letters = "Hello World! ";

console.log(letters.repeat(2));
console.log(name[0].repeat(100));
console.log("hello ".repeat(200));

console.log("Ford".slice(1, 3));
console.log("max".toUpperCase());

const fullname = "Igor Sergienko";
const name2 = fullname.slice(0, 4);
const surname = fullname.slice(5);

console.log(name2, surname, "results");

const string1 = "I am a programmer";

console.log(string1.includes("I"));
console.log(string1.includes("a programmer"));
console.log(string1.includes("teacher"));

console.log(string1.includes(""));

const valueToSearch = "am";
console.log(string1.includes(valueToSearch));

const num = 10;
const string2 = "10101010";

console.log(":)", string2, string2.includes(num), "result");

// Завдання:

const sentense2 = "I am learing JS";
// 1- перевірити наявність слова "am"
// 2- перевірити наявність слова "JS"
// 3- перевірити наявнсть слова "programmer"

// const password = "password23";

// function checkPassword(password) {
//   const numToCheck = 1;

//   return password.includes(numToCheck)
//     ? "Password is correct"
//     : "Password is Inocorect";
// }

// console.log(checkPassword(password), "my function");

console.log(string1.startsWith("I"));
console.log(string1.startsWith("I a"));
console.log(string1.startsWith("Hello"));
console.log(string1.startsWith("I am a programmer"));
console.log(string1.includes("I am a programmer"));
// string1.endsWith();

const string3 = "Hello, I am Igor. I am a <br /> programmer";

console.log(string3.includes("Hello, I am Igor. I am a <br />"));

console.log(string3.endsWith("<br /> programmer"));
console.log(string3.endsWith(""));
console.log(string3.endsWith("Hello, I am Igor. I am a <br /> programmer"));

const string4 = "Hello World!";

const str4 = ":)";
const str5 = ")";
let str6 = "hello";

console.log(string4.concat(str4, str5, str6).toUpperCase());
console.log((string4 + str4 + str5 + str6).toUpperCase());

// console.log(string3.split(""));

// console.log(
//   string3.split("").reduce((acc, letter) => {
//     acc[letter] = acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1);

//     return acc;
//   }, {})
// );

const str7 = "Java";
const str8 = "Script";
// Завдання:
// Отримайте javaScript (concat)

// Interpolation

const quotes1 = "";
const quotes2 = "";

const userName = "Admin";
const usersCount = 194;

const interpolation = `Hello, ${userName}, the user count is: ${usersCount}`;
console.log(interpolation);

const expression = `2 + 2 = ${2 + 2}`;
console.log(expression);

const scream = `Scream: ${userName.toUpperCase()}`;
console.log(scream);

const valueToReplace = "interpolation";
const valueToApply = "JavaScript";

const string5 = "I know interpolation interpolation interpolation";

const userName2 = "Andriy";

console.log(string5.replace(valueToReplace, valueToApply));
console.log(string5.replaceAll(valueToReplace, valueToApply));

const sentece3 = "Hello from Kyiv!";

console.log(sentece3.slice(0, 5).replaceAll("o", "0"));

// Завдання:
const adminText = `Hello, I am an Admin`;
const userText = `Hello, I am a User`;

// Поміняти місцями adminText та userText
// replace();

const string6 = "sI . am a SStringS s";
console.log(string6[0]);
console.log(string6.indexOf("."));
console.log(string6[3]);

const indexOfX = string6.indexOf("^");
console.log(indexOfX);
console.log(string6[indexOfX]);

console.log("hhh".indexOf("h"));
console.log("hhh".lastIndexOf("h"));

function a() {
  // Завдання:
  // 1.
  const str1 = "Hello";
  const str2 = "World";

  // const str3 = ...

  //   Використовуючи replaceAll
  //   замінити всі str1 у тексті на str2

  const text = "Hello, my name is Igor. Hello, hello, hello";

  //   2.
  const name = "Igor";
  const age = 25;
  const skills = "JS, HTML, CSS";

  // Вивести name, age, skills за допомогою інтерполяції у речення (``)
}
