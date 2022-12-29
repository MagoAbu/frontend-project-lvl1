#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getNod = (x, y) => {
  if (y > x) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};

const getLeastCommonDivisor = () => {
  const greeting = 'Welcome to the Brain Games';
  console.log(greeting);

  const userName = readlineSync.question('May i have your name? ');
  const gretUser = `Hello, ${userName}`;
  console.log(gretUser);

  const conditionalQuestion = 'Find the greatest common divisor of given numbers.';
  console.log(conditionalQuestion);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const operand1 = getRandomNumber(1, 100);
    const operand2 = getRandomNumber(1, 100);
    const answer = getNod(operand1, operand2);

    const correctAnswer = String(answer);

    const question = `Qiestion: ${operand1} ${operand2}`;
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      const trueAnswer = 'Correct!';
      console.log(trueAnswer);
    } else {
      const falseAnswer = `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`;
      console.log(falseAnswer);
      return;
    }
  }
  const congrats = `Congratulations, ${userName}`;
  console.log(congrats);
};

getLeastCommonDivisor();
