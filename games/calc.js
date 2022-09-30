import getRandomNum from '../src/getRandomNum.js';
import calcGame from '../src/index.js';

const gameQuestion = 'What is the result of the expression?';

const trueResult = (first, second, operator) => {
  let result = 0;
  if (operator === '+') {
    result = first + second;
  } else if (operator === '-') {
    result = first - second;
  } else if (operator === '*') {
    result = first * second;
  } return String(result);
};

const data = () => {
  const items = ['+', '-', '*'];
  const first = getRandomNum(0, 10);
  const second = getRandomNum(0, 10);
  const operator = items[getRandomNum(0, 2)];
  const task = `${first} ${operator} ${second}`;
  const expectedResult = trueResult(first, second, operator);
  return [task, expectedResult];
};

export default () => {
  calcGame(gameQuestion, data);
};
