export class WallCollision {
    constructor() {
    }
    checkGameEnd(snakeBody, board) {
        // console.log("end");
        const boardBoundry = {
            x: [0, board.canvas.width], y: [0, board.canvas.height]
        };
        const headFrontX = snakeBody[0].getPosition().x + snakeBody[0].getSize();
        const headFrontY = snakeBody[0].getPosition().y + snakeBody[0].getSize();
        if (headFrontX <= boardBoundry.x[0] || headFrontX >= boardBoundry.x[1] || headFrontY <= boardBoundry.y[0] || headFrontY >= boardBoundry.y[1]) {
            return true;
        }
        return false;
    }
}
export class BodyCollision {
    //do this later 
    checkGameEnd(snakeBody, board) {
        const head = snakeBody[0];
        const headPosition = head.getPosition();
        for (let i = 1; i < snakeBody.length; i++) {
            const ele = snakeBody[i];
            const elepos = ele.getPosition();
            const size = ele.getSize();
            const corners = [elepos,
                this.makePosition(elepos.x + size, elepos.y),
                this.makePosition(elepos.x + size, elepos.y + size),
                this.makePosition(elepos.x, elepos.y + size)
            ];
            for (const ele of corners) {
                if (headPosition.x === ele.x && headPosition.y === ele.y) {
                    return true;
                }
            }
        }
        return false;
    }
    makePosition(px, py) {
        return { x: px, y: py };
    }
}
