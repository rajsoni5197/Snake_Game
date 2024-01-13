
type Position = { x: number, y: number }
export class Geometry {
    circleInsideSquare(circlePosition: Position, squarePosition: Position, squareSize: number): boolean {
        if (circlePosition.x >= squarePosition.x &&
            circlePosition.x <= squarePosition.x + squareSize &&
            circlePosition.y <= squarePosition.y &&
            circlePosition.y >= squarePosition.y - squareSize
            ) {
            return true;
        }
        return false;
    }
    findDistance(point1: Position, point2: Position): number {
        const distanceX = point2.x - point1.x;
        const distanceY = point2.y - point1.y;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }
    circleTouchingSquare(circlePosition: Position, circleRadius: number, squarePosition: Position, squareSize: number): boolean {
        // Check if the circle center is inside the square
        if (this.circleInsideSquare(circlePosition, squarePosition, squareSize)) {
            return true; // Circle is completely inside the square
        }

        // Check if the distance between the circle center and the nearest point on the square is less than or equal to the radius
        const nearestX = Math.max(squarePosition.x, Math.min(circlePosition.x, squarePosition.x + squareSize));
        const nearestY = Math.min(squarePosition.y, Math.max(circlePosition.y, squarePosition.y - squareSize));

        const distance = this.findDistance(circlePosition, { x: nearestX, y: nearestY });

        return distance <= circleRadius;
    }
    async circleTouchingSquareAsync(circlePosition: Position, circleRadius: number, squarePosition: Position, squareSize: number): Promise<boolean>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve( this.circleTouchingSquare(circlePosition,circleRadius,squarePosition,squareSize));

            },2)
        })
    }
    getRandomPosition(maxX:number, maxY:number):Position{
        return {x:Math.round(Math.random()* maxX),y:Math.round(Math.random()*maxY)};
    }
}