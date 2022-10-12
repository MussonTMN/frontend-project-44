import getRandomNum from '../utils.js';
import primeGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const getTaskAndSolution = () => {
  const prime = getRandomNum(2, 111);
  const expectedResult = isPrime(prime) ? 'yes' : 'no';
  const task = `${prime}`;
  return [task, expectedResult];
};

export default () => {
  primeGame(description, getTaskAndSolution);
};
