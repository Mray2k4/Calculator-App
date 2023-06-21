/* First Input*/
const firstInput = document.querySelectorAll('#item');

let maxCount = 10
const counter = document.getElementById('counter');;
const items = document.getElementById('item');

firstInput.forEach(function(e) {
  e.addEventListener('click', func1);
})
function func1(e) {
  input.value += e.target.textContent;
  if (maxCount == 0) {//&& e.button !== 'Backspace' || maxCount == 10 && e.button == 'Backspace') {
  e.preventDefault();
      return;
}
    if(e.button == 'Backspace') {
      maxCount = maxCount + 1;
      counter.innerHTML = maxCount;
    } else {
      maxCount = maxCount - 1;
  counter.innerHTML = maxCount;
    }
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
const Calc = function(c) {
  return new Function('return ' + c)();
}

input.value = parseFloat(Calc(input.value).toFixed(3)); 
}



/* Clear */
const clear = document.getElementById('clear');
clear.addEventListener('click', reset);
       
function reset() {
  document.getElementById('input').value= '';
   maxCount = 10;
  counter.innerHTML = maxCount;
    return;
}