const form = document.querySelector('form.login-form');

const handleSubmit = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert(" Всі поля форми повинні бути заповнені");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
form.addEventListener('submit', handleSubmit);
