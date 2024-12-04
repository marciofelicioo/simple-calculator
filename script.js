let currentNumber = '';
let previousNumber = '';
let operator = null;
let isResult = false;

function appendNumber(number) {
    if (isResult) {
        currentNumber = number;
        isResult = false;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    isResult = false;
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operator === null) return;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            currentNumber = (num1 + num2).toString();
            break;
        case '-':
            currentNumber = (num1 - num2).toString();
            break;
        case '*':
            currentNumber = (num1 * num2).toString();
            break;
        case '/':
            currentNumber = num2 === 0 ? 'Erro' : (num1 / num2).toString();
            break;
        default:
            return;
    }
    operator = null;
    previousNumber = '';
    isResult = true; // Indica que o cálculo foi finalizado
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    isResult = false; // Reseta o estado
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentNumber;
}
