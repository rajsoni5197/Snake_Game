export class ScoreBoard {
    constructor(score) {
        this.score = score;
        this.scoreElement = document.querySelector('#score > div:nth-child(2)');
        this.highestElement = document.querySelector('#highestScore > div:nth-child(2)');
    }
    get getScore() {
        var _a;
        const scoreText = (_a = this.scoreElement) === null || _a === void 0 ? void 0 : _a.innerText;
        // Convert string to number
        if (scoreText) {
            const scoreNumber = parseInt(scoreText, 10);
            return isNaN(scoreNumber) ? null : scoreNumber;
        }
        return null;
    }
    get getHighestScore() {
        var _a;
        const highestScoreText = (_a = this.highestElement) === null || _a === void 0 ? void 0 : _a.innerText;
        // Convert string to number
        if (highestScoreText) {
            const highestScoreNumber = parseInt(highestScoreText, 10);
            return isNaN(highestScoreNumber) ? null : highestScoreNumber;
        }
        return null;
    }
    renderSocre() {
        const element = this.scoreElement;
        if (element) {
            element.innerText = this.score.getScore.toString();
        }
    }
    renderHighestSocre() {
        const element = this.highestElement;
        if (element) {
            element.innerText = this.score.getHighestScore.toString();
        }
    }
}
