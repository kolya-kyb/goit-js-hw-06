const form = document.querySelector("form.login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert(" Всі поля форми повинні бути заповнені");
  }

  const user = {};
  const formDate = new FormData(event.currentTarget);
  formDate.forEach((value, name) => {
    user[name] = value;
  });

  console.log("user", user);
  event.currentTarget.reset();
};
form.addEventListener("submit", handleSubmit);
