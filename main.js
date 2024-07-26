const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.num');
const zero = document.querySelector('.zero');

console.log(numbers);

numbers.forEach(button => button.addEventListener('click', function() {
    if(button.textContent === '1')
        display.textContent = 1;
    if(button.textContent === '2')
        display.textContent = 2;
    if(button.textContent === '3')
        display.textContent = 3;
    if(button.textContent === '4')
        display.textContent = 4;
    if(button.textContent === '5')
        display.textContent = 5;
    if(button.textContent === '6')
        display.textContent = 6;
    if(button.textContent === '7')
        display.textContent = 7;
    if(button.textContent === '8')
        display.textContent = 8;
    if(button.textContent === '9')
        display.textContent = 9;
}));

zero.addEventListener('click', () => {
    display.textContent = '0';
})

clear.addEventListener('click', () => {
    display.textContent = '0';
})