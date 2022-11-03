const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const array = [];
ingredients.forEach(element => {
const liEl = document.createElement("li");
  liEl.textContent = (element);
  liEl.classList.add('item');

  return array.push(liEl);
}) 
  
ingredientsEl.append(...array);
