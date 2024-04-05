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

    if (play === "Miss" || play === "Hit") {
      let { aiPlay, randomNum } = this.playerB.smarterAttack(this.boardA);

      while (aiPlay === "Attacked" || aiPlay === false) {
        ({ aiPlay, randomNum } = this.playerB.smarterAttack(this.boardA));
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
