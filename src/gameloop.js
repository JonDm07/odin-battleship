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
  }

  playTurnWithAi(position) {
    const result = this.playerA.attackPosition(this.boardB, position);
    if (result === "Miss" || result === "Hit") {
      const aiPlay = this.playerB.randomAttack(this.boardA);
      this.turn++;
      return result;
    } else if (result === "Attacked") {
      return false;
    }
  }
}
