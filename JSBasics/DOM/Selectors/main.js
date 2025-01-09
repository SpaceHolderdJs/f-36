// Default Selectors

const h1ById = document.getElementById("h1");
console.log(h1ById);

const h1ByTag = document.getElementsByTagName("h1");
console.log(h1ByTag);

const h1ByClass = document.getElementsByClassName("h1");

console.log(h1ByClass, "h1ByClass");

// HTML Collection

console.log(h1ByTag.length);
console.log(h1ByTag.item(10), "item");
console.log(h1ByTag.namedItem("h1"), "named item");

for (const element of h1ByTag) {
  console.log(element);
}

// console.log(());

document.getElementsByTagName("span").textContent = "Span1";

// Query Selectors

const h1ByQuery = document.querySelector("#h1");
const h1ByQueryClass = document.querySelector(".h1");
const h1ByQueryTag = document.querySelector("h1");

console.log(document.querySelector("#div > span > p"), "advanced selector");

console.log(h1ByQuery, "h1ByQuery");
console.log(h1ByQueryClass, "h1ByQueryClass");
console.log(h1ByQueryTag, "h1ByQueryTag");

const allTheElements = document.querySelectorAll("*");
console.log(allTheElements);

// node list

console.log(allTheElements.length);
console.log(allTheElements.entries());

allTheElements.forEach((value, i, collection) => {
  console.log(value, i, collection);
});

for (const element of allTheElements) {
  console.log(element, "element");
}

console.log(allTheElements.item(0));
console.log(allTheElements[0]);

console.log(allTheElements.keys(), "keys");
console.log(allTheElements.values(), "values");

const allTheH1 = document.querySelectorAll("h1");

allTheH1.forEach((element) => {
  element.onclick = () => {
    alert(element.textContent);

    // document.body.removeChild(element);
    element.remove();
  };
});

// Завдання:
// Написати логіку видалення всіх елементів сторінки, які містять контент з цифрою 1
// NodeLists (querySelectorAll)

const task1 = () => {
  const allTheElements = document.querySelectorAll("*");

  allTheElements.forEach((el) => {
    if (el.textContent.includes("1")) {
      el.remove();
    }
  });
};

const elementsToCreate = [
  { tag: "h2", content: "Hello", isVisible: true },
  { tag: "span", content: "JS", isVisible: true },
  { tag: "div", content: "hello", isVisible: false },
];

// Завдання:
// вивести у body всі елементи на екран через DOM
// елементи з isVisible: false виводити не треба

const task2 = () => {
  elementsToCreate.forEach((elementToCreate) => {
    const { tag, content, isVisible } = elementToCreate;

    if (isVisible) {
      const element = document.createElement(tag);
      element.textContent = content;
      document.body.appendChild(element);
    }
  });
};

task2();

const h1 = document.querySelector("h1");

const divToReplaceWith = document.createElement("div");
divToReplaceWith.textContent = "Replaced";

h1.replaceWith(divToReplaceWith);
// h1.replaceWith("Changed");
