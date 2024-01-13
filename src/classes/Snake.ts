import { SnakeCell } from "./SnakeCell.js";
import { MovementManager } from "./SnakeMovementControler.js";
import { Board } from "./Board.js";
import { Geometry } from "./Geometry.js";
import { Food } from "./Food.js";



type Position = { x: number; y: number }
export class Snake {
    private body: SnakeCell[];
    private movementDirection:Position;
    private currentDirection: string;
    private movementManager: MovementManager;
    private posLastCell:Position;
    private board: Board;
   
    

    constructor(board:Board) {
        this.body = [new SnakeCell(0,0, 5, "red")];
        this.movementDirection = { x: 1, y: 0 };
        this.currentDirection = 'right';
        this.movementManager = new MovementManager(this);
        this.posLastCell = this.getLastCellPosition();
        this.board  = board;
        
        
    }
    get getSnakeBody():SnakeCell[]{
        return this.body;
    }
    get getCurrentDirection(): string {
        return this.currentDirection;
    }
    get getMovementDirection(): Position {
        return this.movementDirection;
    }
    set setCurrentDirection(direction: string) {
        this.currentDirection = direction;
    }
    getHead(): SnakeCell {
        return this.body[0];
    }


    changeDirection(x: number, y: number): void {
        this.movementDirection.x = x;
        this.movementDirection.y = y;
    }
    getLastCellPosition(): Position {
        const lastCell = this.body[this.body.length - 1];
        return { x: lastCell.getPosition().x, y: lastCell.getPosition().y };
    }
    changeCellPosition(): void {
       this.posLastCell = this.getLastCellPosition();
       const head :SnakeCell = this.body[0];
        for(let i:number = this.body.length-1 ; i >  0 ; i--){
            this.body[i].setPosition(this.body[i-1].getPosition().x, this.body[i-1].getPosition().y);
        }
        head.setPosition(head.getPosition().x+this.movementDirection.x*head.getSize()+this.movementDirection.x*1,head.getPosition().y+this.movementDirection.y*head.getSize()+this.movementDirection.y*1);
        // console.log('after change pos',this.body,this.body.length,this.posLastCell);
    }

    addCell(): void {
        // to be improved later
        const size = this.body[0].getSize()
        this.body.push(new SnakeCell(this.posLastCell.x,this.posLastCell.y, size));
        
    }

    renderSnake(): void {
        // console.log(this.body,this.body.length,this.posLastCell);
       
            

                if(this.isfoodEaten()){
                    this.board.foodEaten();

                }
                for (const ele of this.body) {
                    ele.renderCell(this.board.getBoard());
                }
           
        
        
    }
    
    isfoodEaten():boolean{
        const food :Food = this.board.getfood;
        const geometryBox:Geometry = food.geometry;
        const foodPostiiton:Position = food.getPosition;
        const foodRadius:number = food.getCurrentRadius;
        const headPosition:Position = this.body[0].getPosition();
        const headSize:number = this.body[0].getSize();
        
       const result =  geometryBox.circleTouchingSquare(foodPostiiton,foodRadius,headPosition,headSize)||geometryBox.circleInsideSquare(foodPostiiton,headPosition,headSize);

        return result;
        
        
    }
}
