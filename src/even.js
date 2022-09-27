import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while (i <= 3) {
    const randomNum = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNum}`);

    const checkParity = randomNum % 2 === 0 ? 'yes' : 'no';

    const answer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0 && answer.toLowerCase() === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (randomNum % 2 !== 0 && answer.toLowerCase() === 'no') {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkParity}'. \nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
