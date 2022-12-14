import getRandomNum from '../utils.js';
import calcGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operator) => {
  let result = 0;
  if (operator === '+') {
    result = firstNum + secondNum;
  } else if (operator === '-') {
    result = firstNum - secondNum;
  } else if (operator === '*') {
    result = firstNum * secondNum;
  } return result;
};

const getTaskAndSolution = () => {
  const items = ['+', '-', '*'];
  const firstNum = getRandomNum(0, 11);
  const secondNum = getRandomNum(0, 11);
  const operator = items[getRandomNum(0, 2)];
  const task = `${firstNum} ${operator} ${secondNum}`;
  const expectedResult = String(calculate(firstNum, secondNum, operator));
  return [task, expectedResult];
};

export default () => {
  calcGame(description, getTaskAndSolution);
};
