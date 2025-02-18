let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

const display = document.getElementById('display');
const buttonSound = new Audio('button.mp3.mp3'); // Ensure button.mp3 is in the same directory

const playSound = () => {
    buttonSound.currentTime = 0;
    buttonSound.play();
};

const appendNumber = (number) => {
    playSound();
    displayValue += number;
    display.value = displayValue;
};

const setOperation = (operation) => {
    playSound();
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue += ` ${operation} `;
    display.value = displayValue;
};

const calculate = () => {
    playSound();
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
    playSound();
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    display.value = displayValue;
};