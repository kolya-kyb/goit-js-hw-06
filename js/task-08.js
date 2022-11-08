const form = document.querySelector("form.login-form");

class UserDate {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert(" Всі поля форми повинні бути заповнені");
  }
  const user1 = new UserDate({
    email: email.value,
    password: password.value,
  });
  console.log(user1);
  event.currentTarget.reset();
};
form.addEventListener("submit", handleSubmit);
