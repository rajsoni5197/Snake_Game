var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Geometry {
    circleInsideSquare(circlePosition, squarePosition, squareSize) {
        if (circlePosition.x >= squarePosition.x &&
            circlePosition.x <= squarePosition.x + squareSize &&
            circlePosition.y <= squarePosition.y &&
            circlePosition.y >= squarePosition.y - squareSize) {
            return true;
        }
        return false;
    }
    findDistance(point1, point2) {
        const distanceX = point2.x - point1.x;
        const distanceY = point2.y - point1.y;
        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
    circleTouchingSquare(circlePosition, circleRadius, squarePosition, squareSize) {
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
    circleTouchingSquareAsync(circlePosition, circleRadius, squarePosition, squareSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.circleTouchingSquare(circlePosition, circleRadius, squarePosition, squareSize));
                }, 2);
            });
        });
    }
    getRandomPosition(maxX, maxY) {
        return { x: Math.round(Math.random() * maxX), y: Math.round(Math.random() * maxY) };
    }
}
