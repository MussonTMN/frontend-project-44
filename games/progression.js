import getRandomNum from '../src/getRandomNum.js';
import progressionGame from '../src/index.js';

const gameQuestion = 'What number is missing in the progression?';

const getProgression = (firstElement, lengthOfArray, numberStep) => {
  const coll = [firstElement];
  for (let i = 1; i < lengthOfArray; i += 1) {
    const nextElement = coll[i - 1] + numberStep;
    coll.push(nextElement);
  }
  return coll;
};

const data = () => {
  const lengthOfArray = getRandomNum(5, 15);
  const firstElement = getRandomNum(0, 100);
  const numberStep = getRandomNum(1, 9);
  const array = getProgression(firstElement, lengthOfArray, numberStep);
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
