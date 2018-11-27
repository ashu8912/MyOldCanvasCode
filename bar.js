class Bar{
    constructor(x,y){
        this.w=300;
        this.h=60;
        this.x=WIDTH/2-this.w/2;
        this.y=HEIGHT-this.h;
    }
    drawBar(brush)
    {
        brush.beginPath();
        brush.fillRect(this.x,this.y,this.w,this.h);
    }
}