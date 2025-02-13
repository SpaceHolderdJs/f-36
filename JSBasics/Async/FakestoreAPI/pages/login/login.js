// Elements
const formWrapper = document.querySelector("#form-wrapper");

new FormConstructor(
  "login-form",
  [
    {
      name: "username",
      type: "text",
      placeholder: "User Name",
      class: "form-control",
    },
    {
      name: "password",
      type: "password",
      placeholder: "User password",
      class: "form-control",
    },
  ],
  {
    class: "d-flex flex-column p-3 m-3 d-flex flex-direction-column gap-3",
    submitBtnClass: "btn btn-primary",
    onSubmit: async (event, { data }) => {
      console.log(data, "formData");

      const loginCorrectData = {
        username: "mor_2314",
        password: "83r5^_",
      };

      // H/W
      // Використати метод login з файлу api.js (FakeStoreAPI.login)
      // Для відправки запиту на авторизацію, використовуючи дані (loginCorrectData)
      // У випадку вдалої авторизації - перенаправити користувача на сторінку продуктів (умова)
      // У випадку провальної авторизації - вивести alert про помилку і нікуди не переходити

      // Умова для переходу (успішна)
      if (false) {
        window.location.href = "../products/products.html";
      }
    },
    parent: formWrapper,
  }
);
