// Elements
const formWrapper = document.querySelector("#form-wrapper");

// Observer
const loginObserver = new Observer();
console.log(loginObserver, "loginObserver");

loginObserver.on("login:attempt", async (loginData) => {
  try {
    const loginPayload = await FakeStoreAPI.login(loginData);

    const { token } = loginPayload;
    localStorage.setItem("token", token);

    const { sub: userID } = jwt_decode(token);
    localStorage.setItem("userID", userID);

    if (loginPayload.token) {
      window.location.href = "../products/products.html";
    }
  } catch (err) {
    loginObserver.emit("login:failed", err);
  }
});

loginObserver.on("login:failed", (err) => {
  alert("Error: Credentials are wrong");
  console.warn(err);
});

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
      // const loginCorrectData = {
      //   username: "mor_2314",
      //   password: "83r5^_",
      // };

      try {
        loginObserver.emit("login:attempt", data);
      } catch (err) {
        loginObserver.emit("login:failed", err);
      }
    },
    parent: formWrapper,
  }
);
