const form = document.querySelector('form.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('sumbit');
    console.log(event);
})
