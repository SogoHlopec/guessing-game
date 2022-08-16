class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.sol = Math.round((this.min + this.max) / 2);
      return this.sol;
  };
    

    lower() {
      this.max = this.sol;
    }

    greater() {
      this.min = this.sol;
    }
}

module.exports = GuessingGame;
