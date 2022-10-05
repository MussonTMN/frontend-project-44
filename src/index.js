import readlineSync from 'readline-sync';

export default (description, getTaskAndSolution) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`${description}`);

  let i = 1;
  while (i <= 3) {
    const [task, expectedResult] = getTaskAndSolution();
    console.log(`Question: ${task}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedResult) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResult}'. \nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    i += 1;
  }
  return console.log(`Congratulations, ${name}!`);
};
