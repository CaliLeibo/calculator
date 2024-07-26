const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

console.log(display.textContent);

clear.addEventListener('click', () => {
    display.textContent='0';
})