
const previousInput = document.getElementById("previous-input");
const currentInput = document.getElementById("current-input");

// Get all buttons
const buttons = document.querySelectorAll("button");

let currentOperand = "";
let previousOperand = "";
let operation = null;

// Function to round numbers and prevent text overflow if number is very long
function roundNumber(num) {
    return parseFloat(Number(num).toFixed(8));
}

function updateDisplay() {
    currentInput.textContent =
        currentOperand === "" ? "0" : roundNumber(currentOperand).toString();
    previousInput.textContent = operation
        ? `${roundNumber(previousOperand)} ${operation}`
        : "";
}



function appendNumber(number) {
    if (number === "," && currentOperand.includes(",")) return;
    currentOperand += number === "," ? "." : number;
}


function chooseOperation(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case "+":
            computation = prev + curr;
            break;
        case "-":
            computation = prev - curr;
            break;
        case "×":
            computation = prev * curr;
            break;
        case "÷":
            computation = curr !== 0 ? prev / curr : "Error";
            break;
        case "%":
            computation = prev % curr;
            break;
        default:
            return;
    }

    currentOperand = computation.toString();
    operation = null;
    previousOperand = "";
}


function deleteDigit() {
    currentOperand = currentOperand.slice(0, -1);
}


function clearAll() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ",") {
            appendNumber(value);
        } else if (["+", "-", "×", "÷", "%"].includes(value)) {
            chooseOperation(value);
        } else if (value === "=") {
            calculate();
        } else if (value === "C") {
            clearAll();
        } else if (value === "CE") {
            currentOperand = "";
        } else if (value === "⌫") {
            deleteDigit();
        } else if (value === "+/-") {
            currentOperand = currentOperand
                ? (parseFloat(currentOperand) * -1).toString()
                : currentOperand;
        }

        updateDisplay();
    });
});

updateDisplay();
