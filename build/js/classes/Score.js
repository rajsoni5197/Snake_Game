import { ScoreBoard } from "./ScoreBoard.js";
export class Score {
    constructor() {
        this.scoreBoard = new ScoreBoard(this);
        this.score = 0;
        this.highestScore = 0;
    }
    get getScore() {
        return this.score;
    }
    set setScore(x) {
        this.score = x;
        this.scoreBoard.renderSocre();
    }
    get getHighestScore() {
        return this.highestScore;
    }
    set setHighestScore(x) {
        if (x > this.highestScore) {
            this.highestScore = x;
            this.scoreBoard.renderHighestSocre();
        }
    }
    incrementScore(x) {
        this.score += x;
        this.scoreBoard.renderSocre();
    }
    decrementScore(x) {
        this.score -= x;
        this.scoreBoard.renderSocre();
    }
}
