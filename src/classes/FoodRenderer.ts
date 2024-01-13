import { Food } from "./Food.js";
export class FoodRenderer {
    renderFood(board: CanvasRenderingContext2D, food: Food):void {

        
        const ctx = board;
        const size = food.getCurrentRadius;
        const x = food.getPosition.x;
        const y = food.getPosition.y;

        ctx.fillStyle = food.getFoodColor;
        
        // Draw lines to form a snowflake
        ctx.beginPath();
        ctx.arc(x, y+size, size, 0, 2 * Math.PI); // Draw a circle representing the center of the snowflake
        ctx.stroke();
        ctx.fill();
      

    }
}