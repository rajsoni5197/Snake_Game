import { ScoreBoard } from "./ScoreBoard.js";
export class Score {
    private score: number;
    private highestScore: number;
    private scoreBoard: ScoreBoard;
    constructor() {
        this.scoreBoard = new ScoreBoard(this);
        this.score = 0;
        this.highestScore = 0;
    }
    get getScore(): number {
        return this.score;
    }
    set setScore(x: number) {
        this.score = x;
        this.scoreBoard.renderSocre();
    }
    get getHighestScore(): number {
        return this.highestScore;
    }
    set setHighestScore(x: number) {
        if (x > this.highestScore) {
            this.highestScore = x;
            this.scoreBoard.renderHighestSocre();
        }

    }
    incrementScore(x: number): void {
        this.score += x;
        this.scoreBoard.renderSocre();
    }
    decrementScore(x: number): void {
        this.score -= x;
        this.scoreBoard.renderSocre();
    }
}

