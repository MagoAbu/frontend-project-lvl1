#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = (coll) => coll[getRandomNumber(0, coll.length - 1)];

const getCalc = () => {
  const greeting = 'Welcome to the Brain Games';
  console.log(greeting);

  const userName = readlineSync.question('May i have your name? ');
  const gretUser = `Hello, ${userName}`;
  console.log(gretUser);

  const conditionalQuestion = 'What is the result of the expression?';
  console.log(conditionalQuestion);

  const ariphmeticOperators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const operand1 = getRandomNumber(1, 20);
    const operand2 = getRandomNumber(1, 20);
    const operator = getRandomItem(ariphmeticOperators);

    const question = `Qiestion: ${operand1} ${operator} ${operand2}`;
    console.log(question);

    let correctAnswer;
    if (operator === '+') {
      correctAnswer = operand1 + operand2;
    } else if (operator === '-') {
      correctAnswer = operand1 - operand2;
    } else {
      correctAnswer = operand1 * operand2;
    }
    console.log(typeof correctAnswer);

    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerToNum = Number(userAnswer);
    console.log(userAnswerToNum);
    if (userAnswerToNum === correctAnswer) {
      const trueAnswer = 'Correct!';
      console.log(trueAnswer);
    } else {
      const falseAnswer = `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'`;
      console.log(falseAnswer);
      return;
    }
  }
  const congrats = `Congratulations, ${userName}`;
  console.log(congrats);
};

getCalc();
