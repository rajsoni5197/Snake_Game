import { SnakeCell } from "./SnakeCell.js";
import { Geometry } from "./Geometry.js";
import { FoodRenderer } from "./FoodRenderer.js";
import { Board } from "./Board.js";

type Position = { x: number, y: number };
type foodVariation = { normal: number, big: number }

export class Food {

    private position: Position;
    private radiusVariation: foodVariation;
    private currentRadius: number;
    private isEaten: boolean;
    private bigFoodIn: number;
    private values: foodVariation;
    private currentValue: number;
    public geometry: Geometry;
    private foodColor :string;
    private foodRenderer:FoodRenderer;


    constructor(foodVariationAfter: number, normalFoodSize: number, bigFoodSize: number, normalFoodValue: number, bigFoodValue: number) {

        this.position = { x: 50, y: 53 };
        this.radiusVariation = { normal: normalFoodSize, big: bigFoodSize };
        this.isEaten = false;
        this.bigFoodIn = 5;
        this.values = { normal: normalFoodValue, big: bigFoodValue };
        this.currentValue = normalFoodValue;
        this.currentRadius = normalFoodSize;
        this.geometry = new Geometry();
        this.foodRenderer = new FoodRenderer();
        this.foodColor = "yellow";
        
    }
    get getPosition(): Position {
        return this.position;
    }

    // Getter for currentRadius
    get getCurrentRadius(): number {
        return this.currentRadius;
    }

    // Getter for currentValue
    get getCurrentValue(): number {
        return this.currentValue;
    }

    // Getter for foodColor
    get getFoodColor(): string{
        return this.foodColor;
    }

    generateFood( snakeBody:SnakeCell[],board: CanvasRenderingContext2D): void {
        
        let newPosition: Position;
        if (this.bigFoodIn === 1 ) {
            
            do {
                newPosition = this.geometry.getRandomPosition(board.canvas.width - this.radiusVariation.big*3, board.canvas.height - this.radiusVariation.big*3);
            } while (this.checkOverlap(snakeBody, newPosition, this.radiusVariation.big));

            this.currentValue = this.values.big;
            console.log("big",this.currentValue);
            this.currentRadius = this.radiusVariation.big;
            this.foodColor="orange"
            this.bigFoodIn = 5;
            
        }
        else {
            do {
                newPosition = this.geometry.getRandomPosition(board.canvas.width - this.radiusVariation.normal*3, board.canvas.height - this.radiusVariation.normal*3);
            } while (this.checkOverlap(snakeBody, newPosition, this.radiusVariation.normal));

            this.currentValue = this.values.normal;
            this.currentRadius = this.radiusVariation.normal;
            this.foodColor = "yellow";
           
        }
        
        this.position = newPosition;
        this.isEaten = false;
        console.log(this);
        // this.foodRenderer.renderFood(board,this);

    }
    checkOverlap(snakeBody: SnakeCell[], position: Position, radius: number) {
        for (const ele of snakeBody) {
            if (this.geometry.circleTouchingSquare(position, radius, ele.getPosition(), ele.getSize())) {
                return true;
            }
        }
        return false;
    }

    gotEaten(snakeBody:SnakeCell[],board:CanvasRenderingContext2D): void {
        
        this.isEaten = true;
        this.bigFoodIn--;
        this.generateFood(snakeBody,board);
    }
    


}

