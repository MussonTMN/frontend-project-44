import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default (gameQuestion, trueResult, task) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`${gameQuestion}`);

  const game = () => {
    let i = 1;
    while (i <= 3) {
      console.log(`Question: ${task}`);

      const answer = readlineSync.question('Your answer: ');

      const rightCondition = Number(answer) === trueResult();

      if (rightCondition) {
        console.log('Correct!');
        i += 1;
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueResult()}'. \nLet's try again, ${name}!`);
      }
    } return console.log(`Congratulations, ${name}!`);
  };
  game();
};
