class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min
        this.right = max
    }

    guess() {
        this.mid = Math.round((this.right - this.left) / 2) + this.left
        return this.mid
    }

    lower() {
        this.right = this.mid
    }

    greater() {
        this.left = this.mid
    }
}

module.exports = GuessingGame;
