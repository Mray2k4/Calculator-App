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

/* Results */
const equal = document.getElementById('equal');
equal.addEventListener('click', results)
 
function results() {
  switch(oper) {
    case '*':
      console.log('firstInput');
      break
    default:
      console.log('no Input')
  }
}


/* Clear */
const clear = document.getElementById('clear');
clear.addEventListener('click', reset);
       
function reset() {
  document.getElementById('input').value = '';
}
