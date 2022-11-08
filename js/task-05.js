const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const textOutput = outputEl.textContent;

inputEl.addEventListener("input", (event) =>
  event.currentTarget.value.trim() !== ""
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = textOutput)
);
