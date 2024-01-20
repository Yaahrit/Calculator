
let output = document.getElementById('output');
let currentInput = '';

function appendToOutput(value) {
    currentInput += value;
    updateOutput();
}

function clearOutput() {
    currentInput = '';
    updateOutput();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateOutput();
}

function updateOutput() {
    output.textContent = currentInput;
}