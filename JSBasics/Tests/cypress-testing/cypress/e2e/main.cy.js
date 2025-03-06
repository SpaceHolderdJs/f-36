describe("Main page test", () => {
  // Will be called before each test you run
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/JSBasics/Tests/cypress-testing/main.html");
  });

  it("Shows h1 element with Hello text", () => {
    cy.get("h1").should("contain", "Hello");
  });

  it("[Counter] Increasing the number of the counter", () => {
    cy.get("#counter").should("contain", 0);
    cy.get("#increase-btn").click();
    cy.get("#counter").should("contain", 1);
  });

  // Завдання:
  // Протестувати логіку зменшення лічильника

  it("[Counter] Decrease the number of the counter", () => {
    cy.get("#counter").should("contain", 0);
    cy.get("#decrease-btn").click();
    cy.get("#counter").should("contain", -1);
  });

  it("[Users] Loads a users list", () => {
    cy.get("#load-users-btn").click();
    cy.wait(1000);
    cy.get(".user-card").should("have.length.at.least", 10);
    //   .and("have.length.greaterThan", 5);
    cy.get("#users-quantity").should("have.text", 10);
  });

  it("[Current URL] Should check the url", () => {
    cy.contains("a", "Google link").click();

    cy.origin("https://www.google.com/", () => {
      cy.url().should("contains", "https://www.google.com");
    });
  });

  it("[Testing FakestoreAPI]", () => {
    const loginCorrectData = {
      username: "mor_2314",
      password: "83r5^_",
    };

    cy.visit("your_link_to_the_liveserver");
    cy.wait(1000);

    cy.get("input[name='username']").type("MyLogin");

    cy.get("button").should("have.text", "Submit");
    cy.get("button").click();
    // Завдання:
    // Команда для запуску npx cypress open (якщо він не активний)
    // Запустити через LiveServer (розширення) проект fakestoreAPI, сторінка Login
    // 1. Протестувати сторінку авторизації
    // - Заповнити дані логіну та паролю
    // - Натиснути на кнопку Submit
    // - Перевірити наявність переходу на сторінку продуктів
  });

  cy.getCookie("user");
});
