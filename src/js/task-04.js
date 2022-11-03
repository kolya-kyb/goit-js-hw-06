const decrButtonEl = document.querySelector('[data-action="decrement"]');
const incrButtonEl1 = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value'); 

let count = 0;
const render = () => value.textContent = count; 

const handleDecrButnClick = () => {
    count -= 1;
    render();
    
}; 
const handleIncrBtnClick= () => {
    count += 1;
    render();
}

render();

decrButtonEl.addEventListener('click', handleDecrButnClick);
incrButtonEl1.addEventListener('click', handleIncrBtnClick);
