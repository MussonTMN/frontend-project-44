import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default (description, data) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`${description}`);

  let i = 1;
  while (i <= 3) {
    const [task, expectedResult] = data();
    console.log(`Question: ${task}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === expectedResult) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResult}'. \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
