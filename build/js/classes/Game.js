import { Board } from "./Board.js";
import { WallCollision, BodyCollision } from "./GameEndRules.js";
import { Score } from "./Score.js";
import { GameControler } from "./GameControler.js";
export class Game {
    constructor() {
        this.gameControler = new GameControler(this);
        this.speed = 250;
        this.lastTimestamp = 0;
        this.animationFrameId = 0;
        this.pause = false;
        this.board = new Board(this, 5, 4, 6, 5, 10);
        this.score = new Score();
        this.gameEndRules = [new WallCollision(), new BodyCollision()];
    }
    get isPaused() {
        return this.pause;
    }
    gameStart() {
        this.board = new Board(this, 5, 4, 6, 5, 10);
        this.speed = 150;
        this.score.setScore = 0;
        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }
    pauseGame() {
        if (this.pause) {
            this.pause = false;
            this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
        }
        else {
            this.pause = true;
            this.board.writeText("Paused", 90, 80);
        }
    }
    endGame() {
        cancelAnimationFrame(this.animationFrameId);
        this.score.setHighestScore = this.score.getScore;
        setTimeout(() => {
            this.board.renderGameOver();
        }, 1000);
    }
    gameLoop(timestamp) {
        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
        if (this.pause === true) {
            cancelAnimationFrame(this.animationFrameId);
        }
        for (const ele of this.gameEndRules) {
            if (ele.checkGameEnd(this.board.getSnake.getSnakeBody, this.board.getBoard())) {
                this.endGame();
            }
            ;
        }
        const elapsed = timestamp - this.lastTimestamp;
        if (elapsed > this.speed) {
            this.board.renderBoard();
            this.lastTimestamp = timestamp;
        }
        // Call requestAnimationFrame recursively
    }
    // Initial call to start the game loop
    handleSnakeEatFood(food) {
        if (this.speed > 50) {
            this.speed -= food.getCurrentValue * 0.5;
        }
        this.score.incrementScore(food.getCurrentValue);
        console.log('speed = ', this.speed);
    }
}
