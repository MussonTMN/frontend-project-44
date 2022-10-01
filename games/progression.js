import getRandomNum from '../src/getRandomNum.js';
import progressionGame from '../src/index.js';

const gameQuestion = 'What number is missing in the progression?';

const getRandomArray = () => {
  const lengthOfArray = getRandomNum(5, 15);
  const first = getRandomNum(0, 100);
  const difference = getRandomNum(1, 9);
  const coll = [first];
  for (let i = 1; i < lengthOfArray; i += 1) {
    const nextElement = coll[i - 1] + difference;
    coll.push(nextElement);
  }
  return coll;
};

const data = () => {
  const array = getRandomArray();
  const arrayLength = array.length - 1;
  const getMissingNum = getRandomNum(0, arrayLength);
  const arrayWithMiss = array.splice(getMissingNum, 1, '..');
  const expectedResult = String(arrayWithMiss);
  const task = array.join(' ');
  return [task, expectedResult];
};

export default () => {
  progressionGame(gameQuestion, data);
};
