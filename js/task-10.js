function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}   
const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

console.log(createEl);
let amountEntered = 0;
inputEl.value = amountEntered;
const handleInput = () => amountEntered =  inputEl.value;

inputEl.addEventListener('change', handleInput)


const createBoxes = (amount) => {
  console.log(amount);  
  let width = 30;
  let height = 30;
  if (amountEntered !== 0) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = width + 'px';
    div.style.height = height+ 'px';
    boxesEl.append(div);
    width += 10;
    height += 10;
  }
  }
  }
  
createEl.addEventListener('click', () => createBoxes(amountEntered  ))


const destroyBoxes = () => {
  boxesEl.innerHTML = " ";
  inputEl.value = 0;
}

destroyEl.addEventListener('click', destroyBoxes);