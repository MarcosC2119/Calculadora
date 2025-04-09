// Selección de elementos
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Variables para almacenar valores
let currentInput = '';
let previousInput = '';
let operator = null;

// Función para manejar clics en los botones
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'clear') {
            // Limpiar pantalla
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        } else if (button.id === 'equals') {
            // Calcular resultado
            if (previousInput && currentInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.value = currentInput;
                previousInput = '';
                operator = null;
            }
        } else if (button.classList.contains('operator')) {
            // Guardar operador
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            // Concatenar números o punto decimal
            currentInput += value;
            display.value = currentInput;
        }
    });
});