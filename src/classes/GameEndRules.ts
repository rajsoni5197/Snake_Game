import { SnakeCell } from "./SnakeCell.js"
import { Geometry } from "./Geometry.js";



export interface GameEndRules {
    checkGameEnd(snakeBody: SnakeCell[], board?: CanvasRenderingContext2D): boolean
}

export class WallCollision implements GameEndRules {
    constructor() {

    }
    checkGameEnd(snakeBody: SnakeCell[], board: CanvasRenderingContext2D): boolean {
        // console.log("end");
        const boardBoundry: { x: number[], y: number[] } = {
            x: [0, board.canvas.width], y: [0, board.canvas.height]
        }

        const headFrontX: number = snakeBody[0].getPosition().x + snakeBody[0].getSize();
        const headFrontY: number = snakeBody[0].getPosition().y + snakeBody[0].getSize();

        if (headFrontX <= boardBoundry.x[0] || headFrontX >= boardBoundry.x[1] || headFrontY <= boardBoundry.y[0] || headFrontY >= boardBoundry.y[1]) {
            return true;
        }
        return false;
    }

}
type Position = { x: number; y: number }
export class BodyCollision implements GameEndRules {
    //do this later 
    checkGameEnd(snakeBody: SnakeCell[], board?: CanvasRenderingContext2D | undefined): boolean {
        const head = snakeBody[0];
        const headPosition = head.getPosition();
        
        for(let i = 1 ; i< snakeBody.length;i++){
            const ele = snakeBody[i];
            const elepos = ele.getPosition();
            const size = ele.getSize();
            const corners :Position[] =  [elepos,
                this.makePosition(elepos.x+size,elepos.y),
                this.makePosition(elepos.x+size,elepos.y+size),
                this.makePosition(elepos.x,elepos.y+size)
            ]
            for(const ele of corners)
            {
                if(headPosition.x === ele.x && headPosition.y === ele.y ){
                 return true ;   
                
                
            }
            }
            
        }
        return false;
    }
        
    
    makePosition(px: number, py: number): Position {
        return { x: px, y: py };
    }
}