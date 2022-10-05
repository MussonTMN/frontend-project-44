import getRandomNum from '../src/getRandomNum.js';
import primeGame from '../src/index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (num) => {
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const data = () => {
  const prime = getRandomNum(2, 111);
  const expectedResult = isPrime(prime);
  const task = `${prime}`;
  return [task, expectedResult];
};

export default () => {
  primeGame(description, data);
};
