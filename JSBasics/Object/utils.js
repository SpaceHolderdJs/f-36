// Object

const obj1 = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
};

const obj2 = {
  d: 113,
  e: 14,
  f: 15,
  g: 16,
};

// const obj2 = obj1;

// obj2.a = 100;

// console.log(obj1, obj2);

// Spread Operator

// Expensive for memory!
const obj3 = { ...obj1, ...obj2 };

obj1.a = 100;

console.log(obj1);
console.log(obj3);

const obj4 = { ...structuredClone(obj3), ...structuredClone(obj1) };
console.log(obj4);

obj1.a = 10;

console.log(obj4);

// Not defined object
const obj = {
  a: 0,
  b: 0,
  data: { name: "", age: 0 },
};

if (false) {
  obj.a = 100;
}
// Not safe for types
obj.b = "Hello";

obj.data = {};

// Error
// console.log(obj.a.toFixed());

// Error
// console.log(obj.b.toFixed());

const obj6 = new Object({
  a: 10,
  b: 11,
  c: 12,
  d: 13,
});

obj1.d = 1000000000;

console.log(obj6, "obj6");

const obj5 = new Object(obj1);
console.log(obj5, "obj5");

obj1.c = 9000;

console.log(obj5, obj1);

// new Object(), {...}, structuredClone, {}, Object.create();
// Object.create();

const obj7 = Object.create(new Array(10));

console.log(obj7);

console.log(obj7.hasOwnProperty(1), "obj7");
console.log("hello".hasOwnProperty(1));

const obj8 = Object.create(new Number(1));

console.log(obj8.hasOwnProperty("a"));

console.log(obj8);
console.log({});
