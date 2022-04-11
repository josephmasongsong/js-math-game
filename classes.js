class Player {
  constructor(name){
    this.name = name;
    this.lives = 3;
  }
}

class GameLoop {
  constructor(player1, player2){
    this.num1 = 0;
    this.num2 = 0;
    this.operators = ['+', '-', '*', '/'];
    this.opIndex = 0;
    this.turn = player1;
    this.player1 = player1;
    this.player2 = player2;
  }
  generateNumbers(){
    this.num1 = Math.floor((Math.random()*20)+1);
    this.num2 = Math.floor((Math.random()*20)+1);
    this.opIndex = Math.floor((Math.random() * 4));
  }
  correct(answer){
    if ( ((this.num1 + this.num2) === Number(answer)) && (this.opIndex === 0) ) {
      return true;
    } else if ( ((this.num1 - this.num2) === Number(answer)) && (this.opIndex === 1) ) {
      return true;
    } else if ( ((this.num1 * this.num2) === Number(answer)) && (this.opIndex === 2) ) {
      return true;
    } else if ( ((this.num1 / this.num2) === Number(answer)) && (this.opIndex === 3) ) {
      return true;
    } else {
      return false;
    }    
  }
  changeTurn(player1, player2){
    if (this.turn === player1) {
      this.turn = player2;
    } else {
      this.turn = player1;
    }
  }
  getResponseToQuestion(){
    return prompt(`${this.turn.name} what is ${this.num1} ${this.operators[this.opIndex]} ${this.num2}`);
  }
  looseLife(){
    if (this.turn === this.player1) {
      this.player1.lives -= 1;
    } else {
      this.player2.lives -= 1;
    }
  }
  init(){
    while(this.player1.lives > 0 && this.player2.lives > 0) {
      this.generateNumbers();
      let answer = this.getResponseToQuestion();
  
      if(this.correct(answer)) {
        alert('Congrats, you know maths!');
      } else {
        this.looseLife();
        alert(`Womp womp! You have ${this.turn.lives} lives left!`);
      }
  
      this.changeTurn(player1, player2);
    }
  }
}

const player1 = new Player("Joseph");
const player2 = new Player("Alisha");
const rules = new GameLoop(player1, player2);
rules.init()

