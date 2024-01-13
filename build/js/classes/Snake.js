import { SnakeCell } from "./SnakeCell.js";
import { MovementManager } from "./SnakeMovementControler.js";
export class Snake {
    constructor(board) {
        this.body = [new SnakeCell(0, 0, 5, "red")];
        this.movementDirection = { x: 1, y: 0 };
        this.currentDirection = 'right';
        this.movementManager = new MovementManager(this);
        this.posLastCell = this.getLastCellPosition();
        this.board = board;
    }
    get getSnakeBody() {
        return this.body;
    }
    get getCurrentDirection() {
        return this.currentDirection;
    }
    get getMovementDirection() {
        return this.movementDirection;
    }
    set setCurrentDirection(direction) {
        this.currentDirection = direction;
    }
    getHead() {
        return this.body[0];
    }
    changeDirection(x, y) {
        this.movementDirection.x = x;
        this.movementDirection.y = y;
    }
    getLastCellPosition() {
        const lastCell = this.body[this.body.length - 1];
        return { x: lastCell.getPosition().x, y: lastCell.getPosition().y };
    }
    changeCellPosition() {
        this.posLastCell = this.getLastCellPosition();
        const head = this.body[0];
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].setPosition(this.body[i - 1].getPosition().x, this.body[i - 1].getPosition().y);
        }
        head.setPosition(head.getPosition().x + this.movementDirection.x * head.getSize() + this.movementDirection.x * 1, head.getPosition().y + this.movementDirection.y * head.getSize() + this.movementDirection.y * 1);
        // console.log('after change pos',this.body,this.body.length,this.posLastCell);
    }
    addCell() {
        // to be improved later
        const size = this.body[0].getSize();
        this.body.push(new SnakeCell(this.posLastCell.x, this.posLastCell.y, size));
    }
    renderSnake() {
        // console.log(this.body,this.body.length,this.posLastCell);
        if (this.isfoodEaten()) {
            this.board.foodEaten();
        }
        for (const ele of this.body) {
            ele.renderCell(this.board.getBoard());
        }
    }
    isfoodEaten() {
        const food = this.board.getfood;
        const geometryBox = food.geometry;
        const foodPostiiton = food.getPosition;
        const foodRadius = food.getCurrentRadius;
        const headPosition = this.body[0].getPosition();
        const headSize = this.body[0].getSize();
        const result = geometryBox.circleTouchingSquare(foodPostiiton, foodRadius, headPosition, headSize) || geometryBox.circleInsideSquare(foodPostiiton, headPosition, headSize);
        return result;
    }
}
