import { Game } from "./Game.js";
export class GameControler{
        private pauseButton:HTMLButtonElement = document.getElementById('pause') as HTMLButtonElement;
        private restartButton:HTMLButtonElement = document.getElementById('restart') as HTMLButtonElement;
        
        constructor(private game:Game){
            this.pauseButton.addEventListener('click',()=>this.handlePause());
            this.restartButton.addEventListener('click',()=>this.handleRestart());
            this.game = game;
            
        }
        handlePause(){
            this.game.pauseGame();
        }
        handleRestart(){
            this.game.gameStart();
        }
}