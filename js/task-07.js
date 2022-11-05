const inputFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = inputFontSizeEl.value +"px"
inputFontSizeEl.addEventListener('input', (event) => textEl.style.fontSize = event.currentTarget.value +"px");
