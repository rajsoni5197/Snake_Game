export class SnakeCell {
    constructor(x, y, size, color = "green") {
        this.position = { x, y };
        this.size = size;
        this.color = color;
    }
    getPosition() {
        return this.position;
    }
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
    getSize() {
        return this.size;
    }
    renderCell(board) {
        board.imageSmoothingEnabled = false;
        board.fillStyle = this.color;
        board.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    eraseCell(board) {
        board.clearRect(this.position.x, this.position.y, this.size, this.size);
    }
}
