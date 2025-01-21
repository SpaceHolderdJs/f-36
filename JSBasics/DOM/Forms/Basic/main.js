const loginForm = document.querySelector("#login-form");
console.log(loginForm);

loginForm.onsubmit = (event) => {
  event.preventDefault();
  console.log(event, "event");
  console.log("Form has been submitted");

  const currentForm = document.forms.login;

  console.log(currentForm.elements.email.value);
  console.log(currentForm.elements.password.value);
};

console.log(document.forms.login, "!!!");
