let n1;
let n2;

let result = document.getElementById('result');

function add() {
    n1 = document.getElementById('number1').value;
    n1 = parseInt(n1)
    n2 = document.getElementById('number2').value;
    n2 = parseInt(n2)

    result.innerHTML = n1 + n2;
}

function subtract() {
    n1 = document.getElementById('number1').value;
    n1 = parseInt(n1)
    n2 = document.getElementById('number2').value;
    n2 = parseInt(n2)

    result.innerHTML = n1 - n2;
}

function multiply() {
    n1 = document.getElementById('number1').value;
    n1 = parseInt(n1)
    n2 = document.getElementById('number2').value;
    n2 = parseInt(n2)

    result.innerHTML = n1 * n2;
}

function divide() {
    n1 = document.getElementById('number1').value;
    n1 = parseInt(n1)
    n2 = document.getElementById('number2').value;
    n2 = parseInt(n2)

    result.innerHTML = n1 / n2;
}