const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.num');
const zero = document.querySelector('.zero');
const operator = document.querySelectorAll('.operator');
let currNum;
let prevNum;

numbers.forEach(button => button.addEventListener('click', function(e) {
    
}));



clear.addEventListener('click', () => {
    display.textContent = '0';
    input = [];
    console.log(input);
})
