let firstInput = document.querySelectorAll("#item");
let operator = document.querySelectorAll("#oper");
let input = document.getElementById("input");

let num1;
let num2;
let oper;

/* First Input*/
firstInput.forEach(function (e) {
  e.addEventListener("click", func1);
});
function func1(num) {
  let numbers = num.target.value;
  if (input.value === "0") input.value = "";
  input.value += numbers;
  input.textContent = input.value;

  if (!num1) {
    num1 = numbers;
  } else if (!!num1 && !oper) {
    num1 += numbers;
  } else if (!num2) {
    num2 = numbers;
  } else if (!!num1 && !!oper) {
    num2 += numbers;
  } else {
  }
}

/* Operator Select */
operator.forEach(function (e) {
  e.addEventListener("click", oper1);
});
function oper1(e) {
  results();
  oper = e.target.value;
  input.value = "";
}

/* Results */
const equal = document.getElementById("equal");
equal.addEventListener("click", results);

function results() {
  if (oper === "+") {
    num1 = parseInt(num1) + parseInt(num2);
    input.value = num1;
    num2 = "";
    decimalPlacement();
  }
  if (oper === "-") {
    num1 = num1 - num2;
    input.value = num1;
    num2 = "";
    decimalPlacement();
  }
  if (oper === "*") {
    num1 = num1 * num2;
    input.value = num1;
    num2 = "";
    decimalPlacement();
  }
  if (oper === "/") {
    num1 = num1 / num2;
    input.value = num1;
    num2 = "";
    decimalPlacement();
  }
}

/* 3 Decimal Placement */
function decimalPlacement() {
  input.value = parseFloat(num1.toFixed(3));
}

/* Clear */
const clear = document.getElementById("clear");
clear.addEventListener("click", reset);

function reset(num) {
  input.value = "0";
  num1 = "";
  num2 = "";
  oper = "";
<<<<<<< HEAD
}
=======
}
>>>>>>> ff128b2656fe85a5f539c4281b7ee17f4c640f75
