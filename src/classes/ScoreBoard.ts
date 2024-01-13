import { Score } from "./Score.js"
export class ScoreBoard{
    private scoreElement: HTMLDivElement |null;
    private highestElement: HTMLDivElement|null;
    private score: Score;
    constructor(score :Score)
    {
        this.score = score;
        this.scoreElement = document.querySelector('#score > div:nth-child(2)') ;
        this.highestElement = document.querySelector('#highestScore > div:nth-child(2)') ;
    }
    get getScore(): number | null {
        
        const scoreText = this.scoreElement?.innerText;

        // Convert string to number
        if (scoreText) {
            const scoreNumber = parseInt(scoreText, 10);
            return isNaN(scoreNumber) ? null : scoreNumber;
        }

        return null;
    }
    get getHighestScore(): number | null {
        const highestScoreText = this.highestElement?.innerText;

        // Convert string to number
        if (highestScoreText) {
            const highestScoreNumber = parseInt(highestScoreText, 10);
            return isNaN(highestScoreNumber) ? null : highestScoreNumber;
        }

        return null;
    }
    renderSocre():void{
        const element = this.scoreElement;
        if(element){
            element.innerText = this.score.getScore.toString();
        }
    }
    renderHighestSocre():void{
        const element = this.highestElement;
        if(element){
            element.innerText = this.score.getHighestScore.toString();
        }
    }
}