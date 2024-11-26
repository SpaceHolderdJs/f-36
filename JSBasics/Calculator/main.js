// Input
const calculatorInput = document.getElementById("calculator-input");

// Output
const calculatorOutput = document.getElementById("calculator-output");

// Calculate

const calculate = (inputOperations) => {
  return eval(inputOperations);
};

// Buttons (numbers)
const calculatorNumbers = document.getElementById("calculator-number-buttons");

const calculatorNumbersButtonsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];

calculatorNumbersButtonsData.forEach((n) => {
  const button = document.createElement("button");
  button.textContent = n;

  button.onclick = () => {
    calculatorInput.value = calculatorInput.value.concat(`${n}`);
  };

  calculatorNumbers.appendChild(button);
});

// Clear
const clearButton = document.createElement("button");
clearButton.textContent = "C";

clearButton.onclick = () => {
  calculatorInput.value = "";
  calculatorOutput.textContent = "0";
};

calculatorNumbers.appendChild(clearButton);

// Operations
const actions = {
  "+": document.getElementById("action-plus"),
  "-": document.getElementById("action-minus"),
  "*": document.getElementById("action-multiply"),
  "/": document.getElementById("action-divide"),
  result: document.getElementById("action-result"),
};

// HW2 (Автоматизувати схожу логіку масивами та їх методами)
// ["+", "-", "*", "/"]

for (const action in actions) {
  if (action !== "result") {
    actions[action].onclick = () => {
      const result = calculate(calculatorInput.value);
      calculatorOutput.textContent = result;

      calculatorInput.value = calculatorInput.value.concat(action);
    };
  }
}

// actions.plus.onclick = () => {
//   const result = calculate(calculatorInput.value);
//   calculatorOutput.textContent = result;

//   calculatorInput.value = calculatorInput.value.concat(`+`);
// };

// actions.minus.onclick = () => {
//   const result = calculate(calculatorInput.value);
//   calculatorOutput.textContent = result;

//   calculatorInput.value = calculatorInput.value.concat(`-`);
// };

// actions.multiply.onclick = () => {
//   const result = calculate(calculatorInput.value);
//   calculatorOutput.textContent = result;

//   calculatorInput.value = calculatorInput.value.concat(`*`);
// };

// actions.divide.onclick = () => {
//   const result = calculate(calculatorInput.value);
//   calculatorOutput.textContent = result;

//   calculatorInput.value = calculatorInput.value.concat(`/`);
// };

// HW2

// Result

actions.result.onclick = () => {
  console.log(calculatorInput.value);
  const result = calculate(calculatorInput.value);
  calculatorOutput.textContent = result;
};

// Завдання:
// 1. Стилізувати калькулятор за власним бажанням
// 2. (Вище)
// 3. ** Переписати eval на звичайну калькуляцію (JS)
