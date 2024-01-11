export class Ship {
  constructor(length, rotation, position) {
    this.length = length;
    this.rotation = rotation;
    this.position = position;
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
