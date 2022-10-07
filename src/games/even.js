import getRandomNum from '../utils.js';
import evenGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTaskAndSolution = () => {
  const getNumber = getRandomNum(0, 111);
  const expectedResult = getNumber % 2 === 0 ? 'yes' : 'no';
  const task = `${getNumber}`;
  return [task, expectedResult];
};

export default () => {
  evenGame(description, getTaskAndSolution);
};
