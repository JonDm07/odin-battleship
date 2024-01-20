export class Gameloop {
  constructor(boardA, boardB, turn) {
    this.boardA = boardA;
    this.boardB = boardB;

    if (turn) {
      this.turn = turn;
    } else {
      this.turn = 0;
    }

    if (boardA.player && boardB.player) {
      this.playerA = boardA.player;
      this.playerB = boardB.player;
    }

    this.winner = undefined;
  }

  playTurnWithAi(position) {
    const play = this.boardB.receiveAttack(position);
    let randomNum = Math.floor(Math.random() * 100);

    if (play === "Miss" || play === "Hit") {
      let aiPlay = this.playerB.randomAttack(this.boardA, randomNum);

      while (aiPlay === "Attacked" || aiPlay === false) {
        randomNum = Math.floor(Math.random() * 100);
        aiPlay = this.playerB.randomAttack(this.boardA, randomNum);
      }

      const returnValue = { play, aiPlay, randomNum };

      this.turn++;
      return returnValue;
    } else if (result === "Attacked") {
      return false;
    }
  }

  checkForWinner() {
    if (this.winner) return this.winner;
    /* 
    if (this.turn < 17) return false; */

    if (this.boardA.shipsNotSunk <= 0) {
      this.winner = this.boardB.player;
      return this.winner;
    } else if (this.boardB.shipsNotSunk <= 0) {
      this.winner = this.boardA.player;
      return this.winner;
    } else {
      return false;
    }
  }
}
