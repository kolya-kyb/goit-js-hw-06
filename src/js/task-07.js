const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', () => Number(event.currentTarget.dataset.length) === event.currentTarget.value.length ? event.currentTarget.classList.add("valid") : event.currentTarget.classList.add("invalid"))

validationInputEl.addEventListener('focus', () => event.currentTarget.classList.value = "");