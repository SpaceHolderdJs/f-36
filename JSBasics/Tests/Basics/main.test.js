// Unit

test("Sum of the elements", () => {
  expect(2 + 2).toBe(4);
});

test("An element persists in the array", () => {
  const arr = ["Hello", "World"];
  expect(arr).toContain("Hello");
});

test("Nullable values (should not pass nullable user)", () => {
  const user = {};
  // const user = null; - Will fallback
  expect(user).not.toBeNull();
});

test("User to exist", () => {
  const user = {};
  expect(user).not.toBeFalsy();
});

test("Compare objects", () => {
  const obj1 = { a: 5 * 2, name: "igor" };
  const obj2 = { a: 9 + 1, name: "igor" };

  expect(obj1).toEqual(obj2);
});

test("Api calls [GET]", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  const firstTodo = todos[0];

  expect(Array.isArray(todos)).toBe(true);
  expect(typeof firstTodo.id).toBe("number");
  expect(typeof firstTodo.completed).toBe("boolean");
  expect(todos.length).toBe(200);

  // const requiredDataKeys = ["userId", "id", "completed", "title"];

  // const responseKeys = Object.keys(todos[0]);

  // const isAllKeysInPlace = responseKeys.every((key) =>
  //   requiredDataKeys.includes(key)
  // );

  // expect(isAllKeysInPlace).toBe(true);
});

test("Update user API [PATCH]", async () => {
  const updateUserData = { name: "Igor", username: "Igor" };

  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    body: JSON.stringify(updateUserData),
    headers: {
      "content-type": "application/json",
    },
  });

  const updatedUser = await response.json();

  expect(updatedUser.name).toBe("Igor");
  expect(updatedUser.username).toBe("Igor");
});
