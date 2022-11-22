import getRandomNum from '../utils.js';
import evenGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getTaskAndSolution = () => {
  const getNumber = getRandomNum(0, 100);
  const expectedResult = isEven(getNumber) ? 'yes' : 'no';
  const task = `${getNumber}`;
  return [task, expectedResult];
};

export default () => {
  evenGame(description, getTaskAndSolution);
};
