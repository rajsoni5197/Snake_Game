export class SnakeCell{
    private position :{x:number, y:number};
    private size:number;
    private color: string;
    
    constructor(x:number , y:number,size:number,color:string = "green"){
        this.position = {x,y};
        this.size=size
        this.color = color;
    }
    getPosition():{x:number, y:number}{
        return this.position;
    }
    setPosition(x:number , y:number){
        this.position.x = x;
        this.position.y = y ;
    }
    getSize():number{
        return this.size;
    }
    renderCell(board: CanvasRenderingContext2D):void{
        board.imageSmoothingEnabled = false;
        board.fillStyle = this.color;
        board.fillRect(this.position.x , this.position.y , this.size, this.size);
       
    }
    eraseCell(board: CanvasRenderingContext2D): void {
        board.clearRect(this.position.x, this.position.y, this.size, this.size);
    }
}