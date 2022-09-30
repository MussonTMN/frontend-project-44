import getRandomNum from '../src/getRandomNum.js';
import gcdGame from '../src/index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const trueResult = (first, second) => {
  const lesserOperand = first <= second ? first : second;
  const biggerOperand = first >= second ? first : second;
  let gcd = lesserOperand;
  while (lesserOperand % gcd !== 0 || biggerOperand % gcd !== 0) {
    gcd -= 1;
  }
  return String(gcd);
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
