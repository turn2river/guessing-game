class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.guessCandidate = Math.round((this.max + this.min) / 2));
  }

  lower() {
    this.max = this.guessCandidate;
  }

  greater() {
    this.min = this.guessCandidate;
  }
}

module.exports = GuessingGame;
