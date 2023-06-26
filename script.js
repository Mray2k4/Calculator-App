let firstInput = document.querySelectorAll('#item');
let operator = document.querySelectorAll('#oper');
//let decimal = document.getElementById('decimal');
let input = document.getElementById('input');


input.value = '0';
let num1;
let num2;
let oper;


/* First Input*/
firstInput.forEach(function(e) {
  e.addEventListener('click', func1);
})
function func1(num) {
  let numbers = num.target.value;
  if (input.value === '0') 
    input.value = '';
    input.value += numbers;
    //input.textContent = input.value;
  
  if (!num1) {
    num1 = numbers;
} else  if (!!num1 && !oper) {
    num1 += numbers;
} else if (!num2) {
    num2 = numbers;
} else if (!!num1 && !!oper) {
    num2 += numbers;
} else {
}
}

/* Operator Select */
operator.forEach(function(e) {
  e.addEventListener('click', oper1)
})
function oper1(e) {
 oper = e.target.value;
  if (oper === oper) 
    input.value = '';
  
  if (oper && !num1) {
  if (oper === '+') {
    num1 = parseInt(num1) + parseInt(num2);
    } 
  if (oper === '-') {
    num1 = num1 - num2;
  }
  if (oper === '*') {
    num1 = num1 * num2;
  } 
  if (oper === '/') {
    num1 = num1 / num2;
    
} else {
//input.value = parseFloat(Calc(input.value).toFixed(3));*/ 
}
}
}

/* Decimal */
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', dec)

function dec() {
  if (!input.value.includes('.'))
    input.value += '.';
}

/* Results */
/*const equal = document.getElementById('equal');
equal.addEventListener('click', results)

function results() {
const Calc = function(c) {
  return new Function('return ' + c)();
}

input.value = parseFloat(Calc(input.value).toFixed(3)); 
}*/


/* Clear */
const clear = document.getElementById('clear');
clear.addEventListener('click', reset);
       
function reset(num) {
  input.value = '0';
  num1 = '';
  num2 = '';
  oper = '';
};