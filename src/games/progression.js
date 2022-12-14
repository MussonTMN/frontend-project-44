import getRandomNum from '../utils.js';
import progressionGame from '../index.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgression = (firstElement, lengthOfArray, numberStep) => {
  const coll = [firstElement];
  for (let i = 1; i < lengthOfArray; i += 1) {
    const nextElement = coll[i - 1] + numberStep;
    coll.push(nextElement);
  }
  return coll;
};

const getTaskAndSolution = () => {
  const firstElement = getRandomNum(0, 100);
  const numberStep = getRandomNum(1, 9);
  const progression = getProgression(firstElement, lengthOfProgression, numberStep);
  const lastIndex = progression.length - 1;
  const getMissingNum = getRandomNum(0, lastIndex);
  const formatProgression = progression.splice(getMissingNum, 1, '..');
  const expectedResult = String(formatProgression);
  const task = progression.join(' ');
  return [task, expectedResult];
};

export default () => {
  progressionGame(description, getTaskAndSolution);
};
