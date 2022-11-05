function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonChangeColorEl = document.querySelector('.change-color');
const colorBackgroundTextEl = document.querySelector('.color');
const body = document.body;

const text = colorBackgroundTextEl.textContent;

const addTextContent = (color, text) => {
  colorBackgroundTextEl.textContent = "";
  colorBackgroundTextEl.textContent = text + color;

}

const handleButtonChangeColorClick = (event) => {
  let color = getRandomHexColor();

  addTextContent(color, text);
 
  body.style.backgroundColor = color;
  console.log(color);
  
}

buttonChangeColorEl.addEventListener('click', handleButtonChangeColorClick);