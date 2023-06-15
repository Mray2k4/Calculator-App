/* First Input*/
const firstInput = document.querySelectorAll('#item');

firstInput.forEach(function(e) {
  e.addEventListener('click', func1);
})
function func1(e) {
  input.value += e.target.textContent;
}


/* Operator Select */
const oper = document.querySelectorAll('#oper');

oper.forEach(function(e) {
  e.addEventListener('click', oper1)
})
function oper1(e) {
  input.value += e.target.textContent;
  }


const equal = document.getElementById('equal');
equal.addEventListener('click', results)

function results() {
const Calc = function(c) {
  return new Function('return ' + c)();
}

input.value = parseFloat(Calc(input.value).toFixed(3));
}
input.value = '';


/* Clear */
const clear = document.getElementById('clear');
clear.addEventListener('click', reset);
       
function reset() {
  document.getElementById('input').value = '';
}
