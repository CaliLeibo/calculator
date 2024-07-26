const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.num');
const zero = document.querySelector('.zero');
const operator = document.querySelectorAll('.operator');
let currNum = '';
let prevNum = '';

numbers.forEach(button => button.addEventListener('click', function(e) { 
    number(e.target.textContent);
    display.textContent = currNum;
    
}));

operator.forEach(button => button.addEventListener('click', function(e) { 
    operation(e.target.textContent);
}));

clear.addEventListener('click', () => {
    display.textContent = '0';
    currNum = '';
    prevNum = '';
})

function number(num) {
    if (currNum.length < 10)
        currNum += num;
}

function operation(op){
    console.log(op);
    prevNum = currNum;
    currNum = '';
}

