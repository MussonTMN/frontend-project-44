import getRandomNum from '../src/getRandomNum.js';
import gcdGame from '../src/index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const trueResult = (first, second) => {
};

const data = () => {
  const first = getRandomNum(0, 100);
  const second = getRandomNum(0, 100);
  const task = `${first} ${second}`;
  const expectedResult = trueResult(first, second);
  return [task, expectedResult];
};

export default () => {
  gcdGame(gameQuestion, data);
};
