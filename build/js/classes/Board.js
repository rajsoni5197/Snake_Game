import { Snake } from "./Snake.js";
import { Food } from "./Food.js";
import { FoodRenderer } from "./FoodRenderer.js";
export class Board {
    constructor(game, foodVariationAfter, normalFoodSize, bigFoodSize, normalFoodValue, bigFoodValue) {
        const canvas = document.getElementById('canvas1');
        this.board = canvas.getContext('2d');
        this.snake = new Snake(this);
        this.food = new Food(foodVariationAfter, normalFoodSize, bigFoodSize, normalFoodValue, bigFoodValue);
        this.foodRenderer = new FoodRenderer();
        this.game = game;
        this.writeText("Click Here To start !", 20, 80);
        canvas.addEventListener("click", (e) => {
            this.game.gameStart();
        });
    }
    getBoard() {
        return this.board;
    }
    renderBoard() {
        this.clearBoard();
        this.foodRenderer.renderFood(this.getBoard(), this.food);
        this.snake.renderSnake();
        this.snake.changeCellPosition();
    }
    renderGameOver() {
        // this.clearBoard();
        // alert('game over')
        this.writeText("Game over !", 50, 70);
        this.writeText("Click to Restart", 50, 100);
    }
    writeText(text, x, y) {
        this.board.font = "30px Arial";
        this.board.fillStyle = "white";
        this.board.fillText(text, x, y);
    }
    clearBoard() {
        // return new Promise((resolve)=>{
        //     setTimeout(() => {
        //         resolve();
        //     }, 0);})
        this.board.clearRect(0, 0, this.board.canvas.width, this.board.canvas.height);
    }
    foodEaten() {
        this.clearBoard();
        this.food.gotEaten(this.snake.getSnakeBody, this.getBoard());
        this.snake.addCell();
        this.game.handleSnakeEatFood(this.food);
    }
    get getSnake() {
        return this.snake;
    }
    get getfood() {
        return this.food;
    }
}
