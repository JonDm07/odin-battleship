export class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    if (this.timesHit >= this.length) {
      return;
    } else {
      this.timesHit += 1;
    }
  }

  isSunk() {
    return this.timesHit >= this.length;
  }
}
