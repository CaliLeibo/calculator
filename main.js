const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.num');
const zero = document.querySelector('.zero');
let input1 = [];

console.log(input1);

numbers.forEach(button => button.addEventListener('click', function() {
    if(button.textContent === '1')
        input1.push('1');
    if(button.textContent === '2')
        input1.push('2');
    if(button.textContent === '3')
        input1.push('3');
    if(button.textContent === '4')
        input1.push('4');
    if(button.textContent === '5')
        input1.push('5');
    if(button.textContent === '6')
        input1.push('6');
    if(button.textContent === '7')
        input1.push('7');
    if(button.textContent === '8')
        input1.push('8');
    if(button.textContent === '9')
        input1.push('9');
    
    console.log(input1);
    display.textContent= input1.join('');
}));

zero.addEventListener('click', () => {
    input1.push('0');
    console.log(input1);
    display.textContent= input1.join('');
})

clear.addEventListener('click', () => {
    display.textContent = '0';
    input1 = [];
    console.log(input1);
})