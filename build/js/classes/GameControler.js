export class GameControler {
    constructor(game) {
        this.game = game;
        this.pauseButton = document.getElementById('pause');
        this.restartButton = document.getElementById('restart');
        this.pauseButton.addEventListener('click', () => this.handlePause());
        this.restartButton.addEventListener('click', () => this.handleRestart());
        this.game = game;
    }
    handlePause() {
        this.game.pauseGame();
    }
    handleRestart() {
        this.game.gameStart();
    }
}
