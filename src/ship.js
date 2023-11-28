export function Ship(length) {
  return {
    length,
    timesHit: 0,

    hit: function () {
      if (this.timesHit >= this.length) {
        return;
      } else {
        this.timesHit += 1;
      }
    },
    isSunk: function () {
      return this.timesHit >= this.length;
    },
  };
}
