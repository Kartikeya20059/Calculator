let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

const display = document.getElementById('display');

const appendNumber = (number) => {
    displayValue += number;
    display.value = displayValue;
};

const setOperation = (operation) => {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue += ` ${operation} `;
    display.value = displayValue;
};

const calculate = () => {
    if (currentOperation === null || displayValue === '') return;
    const parts = displayValue.split(` ${currentOperation} `);
    secondOperand = parseFloat(parts[1]);
    switch (currentOperation) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }
    display.value = displayValue;
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
};

const clearDisplay = () => {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    display.value = displayValue;
};