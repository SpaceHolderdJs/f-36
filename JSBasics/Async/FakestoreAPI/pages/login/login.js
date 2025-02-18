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

      try {
        const loginPayload = await FakeStoreAPI.login(loginCorrectData);

        console.log(loginPayload, "!!!!");

        // if (loginPayload.token) {
        //   window.location.href = "../products/products.html";
        // }
      } catch (err) {
        alert("Error: Credentials are wrong");
        console.log(err);
      }
    },
    parent: formWrapper,
  }
);
