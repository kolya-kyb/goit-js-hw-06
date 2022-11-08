const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
// const array = [];
const arr = ingredients.map((element) => createElement(element));

function createElement(element) {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");
  console.log(liEl);
  return liEl;
}

ingredientsEl.append(...arr);
