
let firstInput = document.querySelectorAll('#item');
let operator = document.querySelectorAll('#oper');
let input = document.getElementById('input');


input.value = '0';
let num1;
let oper;
let array = [];

/* First Input*/
firstInput.forEach(function(e) {
  e.addEventListener('click', func1);
})
function func1(num) {
  let numbers = num.target.value;
  if (input.value === '0')
   input.value = '';
  input.value += numbers;
  
  }

/* Decimal */
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', dec)

function dec() {
  if (!input.value.includes('.'))
    input.value += '.';
}


/* Operator Select */
operator.forEach(function(e) {
  e.addEventListener('click', oper1)
})
function oper1(e) {
  let oper = e.target.value;
  // input.value += e.target.textContent;
  if (oper === '+') {
    num1 = oper;
    input.value = '0';
    array.push(num1);
    array.push('+');
    } else if (oper === '-') {
    num1 = oper;
    input.value = '0';
    array.push(num1);
    array.push('-');
} else if (oper === '*') {
    num1 = oper;
    input.value = '0';
    array.push(num1);
    array.push('*');
} else if (oper === '/') {
    num1 = input.value;
    input.value = '0'
    array.push(num1);
    array.push('/');
} else {
}
}

/* Results */
const equal = document.getElementById('equal');
equal.addEventListener('click', results)

function results() {
const Calc = function(c) {
  return new Function('return ' + c)(array.join(' '));
}

input.value = parseFloat(Calc(input.value).toFixed(3)); 
}


/* Clear */
const clear = document.getElementById('clear');
clear.addEventListener('click', reset);
       
function reset(num) {
  input.value = '0';
};