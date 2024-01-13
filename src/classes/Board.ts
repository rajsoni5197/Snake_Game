import { Snake } from "./Snake.js";
import { Food } from "./Food.js";
import { FoodRenderer } from "./FoodRenderer.js";
import { Game } from "./Game.js";
export class Board {
    private game : Game;
    private board: CanvasRenderingContext2D;
    private snake: Snake;
    private food: Food;
    private foodRenderer: FoodRenderer;
    
    constructor(game:Game,foodVariationAfter: number, normalFoodSize: number, bigFoodSize: number, normalFoodValue: number, bigFoodValue: number) {
        const canvas: HTMLCanvasElement = document.getElementById('canvas1') as HTMLCanvasElement;
        this.board = canvas.getContext('2d') as CanvasRenderingContext2D;
        this.snake = new Snake(this);
        this.food = new Food(foodVariationAfter, normalFoodSize, bigFoodSize, normalFoodValue, bigFoodValue);
        this.foodRenderer = new FoodRenderer();
        this.game = game;
        
        this.writeText("Click Here To start !",20,80);
        canvas.addEventListener("click",(e)=>{
            this.game.gameStart();
        })
    }
    getBoard(): CanvasRenderingContext2D {
        return this.board;
    }
    renderBoard(): void {
            this.clearBoard();
            this.foodRenderer.renderFood(this.getBoard(), this.food) 
            this.snake.renderSnake();
            this.snake.changeCellPosition();
            

    }
    renderGameOver(){
        // this.clearBoard();
        // alert('game over')

        this.writeText("Game over !", 50, 70);
        this.writeText("Click to Restart", 50, 100);

    }
    writeText(text:string ,x:number,y:number){
        this.board.font = "30px Arial";
        this.board.fillStyle = "white";
        this.board.fillText(text, x, y);
        
    }
    clearBoard(): void {
        // return new Promise((resolve)=>{

        //     setTimeout(() => {
        //         resolve();
        //     }, 0);})
        this.board.clearRect(0, 0, this.board.canvas.width, this.board.canvas.height);

    }

    foodEaten(): void {
        this.clearBoard();
        this.food.gotEaten(this.snake.getSnakeBody, this.getBoard())
        this.snake.addCell();
        this.game.handleSnakeEatFood(this.food);
        
        
    }
    get getSnake(): Snake {
        return this.snake;
    }
    get getfood(): Food {
        return this.food;
    }
}