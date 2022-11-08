const validationInputEl = document.querySelector("#validation-input");

const classValid = (event) => {
  if (event.currentTarget.classList.contains("invalid")) {
    event.currentTarget.classList.remove("invalid");
  }
  event.currentTarget.classList.add("valid");
};
const classInvalid = (event) => {
  if (event.currentTarget.classList.contains("valid")) {
    event.currentTarget.classList.remove("valid");
  }
  event.currentTarget.classList.add("invalid");
};

validationInputEl.addEventListener("blur", (event) => {
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.length
  ) {
    classValid(event);
  } else classInvalid(event);
});

// validationInputEl.addEventListener(
//   "focus",
//   (event) => (event.currentTarget.classList.value = "")
// );
