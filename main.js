const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.num');
const zero = document.querySelector('.zero');
const operator = document.querySelectorAll('.operator');
let input = [];
let num1 = 0;

numbers.forEach(button => button.addEventListener('click', function() {
    if(button.textContent === '1' && input.length < 10)
        input.push('1');
    if(button.textContent === '2' && input.length < 10)
        input.push('2');
    if(button.textContent === '3' && input.length < 10)
        input.push('3');
    if(button.textContent === '4' && input.length < 10)
        input.push('4');
    if(button.textContent === '5' && input.length < 10)
        input.push('5');
    if(button.textContent === '6' && input.length < 10)
        input.push('6');
    if(button.textContent === '7' && input.length < 10)
        input.push('7');
    if(button.textContent === '8' && input.length < 10)
        input.push('8');
    if(button.textContent === '9' && input.length < 10)
        input.push('9');
    
    num1 = input.join('')
    display.textContent= num1;    
    numerator1 = parseInt(num1);
    console.log(`${numerator1} ` + typeof numerator1);
}));

zero.addEventListener('click', () => {
    input.push('0');
    console.log(input);
    display.textContent= input.join('');
})

operator.forEach((op) => op.addEventListener('click', function() {
    if (op.textContent === '+') {
    }
}));

clear.addEventListener('click', () => {
    display.textContent = '0';
    input = [];
    console.log(input);
})

function computeSum(arr) {
    let num = parseInt(arr);
}