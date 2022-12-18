#!/usr/bin/env node

import readdlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const getParityCheck = () => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);

  const userName = readdlineSync.question('May I  have your name? ');
  console.log(`Hello, ${userName}`);

  const conditions = 'Answer "yes" if the number is even, otherwise answer "no"';
  console.log(conditions);

  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const num = Math.round(Math.random() * 100);
    const correctAnswer = isEven(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const userAnswer = readdlineSync.question('Your answer: ');

    const correctOutput = 'Correct!';
    const incorrectOutput = `'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}`;

    if (correctAnswer === userAnswer) {
      console.log(correctOutput);
    } else {
      console.log(incorrectOutput);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

getParityCheck();
