const labelLogin = document.querySelector('.login-form [name="email"]');
const labelPassword = document.querySelector('.login-form [name="password"]');
const formBtn = document.querySelector(".login-form button");
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (labelLogin.value === "" || labelPassword.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const formData = {
      email: labelLogin.value,
      password: labelPassword.value,
    };

    console.log(formData);

    loginForm.reset();
  }
});
