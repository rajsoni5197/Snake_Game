export class MovementManager {
    constructor(snake) {
        this.snake = snake;
        this.snake = snake;
        const up = document.getElementById('up');
        const down = document.getElementById('down');
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        up.addEventListener('click', () => {
            const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
            this.handleKeyPress(event);
        });
        down.addEventListener('click', () => {
            const event = new KeyboardEvent("keydown", { key: 'ArrowDown' });
            this.handleKeyPress(event);
        });
        left.addEventListener('click', () => {
            const event = new KeyboardEvent("keydown", { key: 'ArrowLeft' });
            this.handleKeyPress(event);
        });
        right.addEventListener('click', () => {
            const event = new KeyboardEvent("keydown", { key: 'ArrowRight' });
            this.handleKeyPress(event);
        });
        window.addEventListener("keydown", (e) => {
            this.handleKeyPress(e);
        });
    }
    handleKeyPress(event) {
        const currentDirection = this.snake.getCurrentDirection;
        // alert(event);
        switch (event.key) {
            case "ArrowUp":
                if (currentDirection === 'up' || currentDirection === 'down')
                    return;
                this.snake.changeDirection(0, -1);
                this.snake.setCurrentDirection = 'up';
                break;
            case "ArrowDown":
                // alert("down");
                if (currentDirection === 'up' || currentDirection === 'down')
                    return;
                this.snake.changeDirection(0, 1);
                this.snake.setCurrentDirection = 'down';
                break;
            case "ArrowLeft":
                if (currentDirection === 'right' || currentDirection === 'left')
                    return;
                this.snake.changeDirection(-1, 0);
                this.snake.setCurrentDirection = 'left';
                break;
            case "ArrowRight":
                if (currentDirection === 'right' || currentDirection === 'left')
                    return;
                this.snake.changeDirection(1, 0);
                this.snake.setCurrentDirection = 'right';
                break;
            // Add more cases for other keys if needed
        }
    }
}
