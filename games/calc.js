import getRandomNum from '../src/getRandomNum.js';
import calcGame from '../src/even.js';

export default () => {
  calcGame();
  const gameQuestion = 'What is the result of the expression?';

  const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  const oneOfThree = () => {
    const items = ['+', '-', '*'];
    return items[randomInteger(0, 2)];
  };

  const firstNum = getRandomNum();
  const secondNum = getRandomNum();

  const task = `${firstNum} ${oneOfThree()} ${secondNum}`;

  const trueResult = () => {
    const taskColl = task.split(' ');
    const first = Number(taskColl[0]);
    const second = Number(taskColl[2]);
    const operator = taskColl[1];
    let result = 0;
    if (operator === '+') {
      result = first + second;
    } else if (operator === '-') {
      result = first - second;
    } else if (operator === '*') {
      result = first * second;
    } return result;
  };
};
