/**
 * Each item in the array represents a player's number of lives
 */
 let lives = [3, 3];
/**
 * Assign each player values that correspond
 * with indices in the lives array
 */
const player1 = 0;
const player2 = 1;

// Player goes first
let turn = player1;


let num1 = 0;
let num2 = 0;
let opIndex = 0;
const operators = ['+', '-', '*', '/'];

const looseLife = () => {
  if (turn === player1) {
    lives[player1] -= 1;
  } else {
    lives[player2] -= 1;
  }
};

const changeTurn = () => {
  if (turn === player1) {
    turn = player2;
  } else {
    turn = player1;
  }
}

const generateNumbers = () => {
  num1 = Math.floor((Math.random()*20)+1);
  num2 = Math.floor((Math.random()*20)+1);
  opIndex = Math.floor((Math.random() * 4));
};

const getResponseToQuestion = () => {
  return prompt(`Player ${turn + 1} what is ${num1} ${operators[opIndex]} ${num2}`);
};

const correct = answer => {
  if ( ((num1 + num2) === Number(answer)) && (opIndex === 0) ) {
    return true;
  } else if ( ((num1 - num2) === Number(answer)) && (opIndex === 1) ) {
    return true;
  } else if ( ((num1 * num2) === Number(answer)) && (opIndex === 2) ) {
    return true;
  } else if ( ((num1 / num2) === Number(answer)) && (opIndex === 3) ) {
    return true;
  } else {
    return false;
  }
}

const gameLoop = () => {
  while(lives[player1] > 0 && lives[player2] > 0) {
    generateNumbers();
    let answer = getResponseToQuestion();

    if(correct(answer)) {
      alert('Congrats, you know maths!');
    } else {
      looseLife();
      alert(`Womp womp! You have ${lives[turn]} lives left!`);
    }

    changeTurn();
  }
};

onload = () => {
  gameLoop();
}