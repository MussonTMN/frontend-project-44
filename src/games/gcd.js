import getRandomNum from '../getRandomNum.js';
import gcdGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  const lesserOperand = first <= second ? first : second;
  const biggerOperand = first >= second ? first : second;
  let gcd = lesserOperand;
  while (lesserOperand % gcd !== 0 || biggerOperand % gcd !== 0) {
    gcd -= 1;
  }
  return String(gcd);
};

const getTaskAndSolution = () => {
  const first = getRandomNum(0, 100);
  const second = getRandomNum(0, 100);
  const task = `${first} ${second}`;
  const expectedResult = getGcd(first, second);
  return [task, expectedResult];
};

export default () => {
  gcdGame(description, getTaskAndSolution);
};
