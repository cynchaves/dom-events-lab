/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll('.number');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
/*-------------------------------- Variables --------------------------------*/
  let firstNum = null;
  let secondNum = null;
  let operator = null;
  let display = document.querySelector('.display');
  display.innerText = 0;
/*-------------------------------- Functions --------------------------------*/
function add() {
  return firstNum + secondNum;
};

function subtract() {
  return firstNum - secondNum;
};

function multiply() {
  return firstNum * secondNum;
};

function divide() {
  return firstNum / secondNum;
};
/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
      display.innerText = (event.target.innerText);
      console.log(display.innerText);
    });
  });
  
addButton.addEventListener('click', () => {
  firstNum = Number(display.innerText);
  operator = '+';
  display.innerText = '+';
});

subtractButton.addEventListener('click', () => {
  firstNum = Number(display.innerText);
  operator = '-';
  display.innerText = '-';
});

multiplyButton.addEventListener('click', () => {
  firstNum = Number(display.innerText);
  operator = '*';
  display.innerText = '*';
});

divideButton.addEventListener('click', () => {
  firstNum = Number(display.innerText);
  operator = '/';
  display.innerText = '/';
});

clearButton.addEventListener('click', () => {
  display.innerText = '0';
});

equalsButton.addEventListener('click', () => {
  secondNum = Number(display.innerText);
  if (operator === '+') {
    display.innerText = add();
  }
  else if (operator === '-') {
    display.innerText = subtract();
  }

  else if (operator === '*') {
    display.innerText = multiply();
  }

  else if (operator === '/') {
  display.innerText = divide();
  };
});





