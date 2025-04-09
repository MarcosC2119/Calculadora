
//variables globales
let currentInput = '0'; 
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number; // Reemplazar el 0 inicial
    } else if (number === '.' && currentInput.includes('.')) {
        return; // Evitar múltiples puntos decimales
    } else {
        currentInput += number; // Concatenar el número
    }
    updateDisplay();
}

// Función para manejar la selección de operadores
function chooseOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = operate(operator, firstOperand, parseFloat(currentInput));
    }
    operator = op;
    currentInput = '';
    updateDisplay();
}

//Funcion que realiza las operaciones matemáticas.
function operate(op, a, b) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error'; // Manejo de división por cero
        default:
            return b;
    }
}

//Funcion para calcular el resultado final
function calculate() {
    if (firstOperand === null || currentInput === '') return;
    currentInput = operate(operator, firstOperand, parseFloat(currentInput)).toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

//Funcion para actualizar pantalla
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || '0';
}

//Funcion para limpiar la calculadora
function clear() {
    currentInput = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

// Event listeners for buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => chooseOperator(button.textContent));
});

document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);