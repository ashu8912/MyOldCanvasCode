class Circle{
    constructor(x,y,dx,dy)
    {   this.x=x;
        this.y=y;
        this.xSpeed=dx;
        this.ySpeed=dy;
        this.radius=30;
        this.maxRadius=60;
        this.minRadius=Math.random()*5+1;
        this.colorArray=["#284854","#32CCB0","#FFEDA7","#FF5C58","#512C54"];
       this.color=this.colorArray[Math.floor(Math.random()*this.colorArray.length)];
    }
    
    draw(brush,mouse){
        brush.beginPath();
        if(this.x+30>=window.innerWidth || this.x-30<0)
        {
            this.xSpeed=-this.xSpeed;
        }
        if(this.y+30>=window.innerHeight || this.y-30<0)
        {
            this.ySpeed=-this.ySpeed;
        }
        brush.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;

        brush.stroke();
        brush.strokeStyle="lightgreen";
        brush.fillStyle=this.color;
        brush.fill();
     //interaction
     if(mouse.x-this.x<this.maxRadius && 
        mouse.x-this.x>-this.maxRadius && 
        mouse.y-this.y<this.maxRadius && 
        mouse.y-this.y>-this.maxRadius)
     {
         if(this.radius<this.maxRadius)
         {
         this.radius+=1;
         }
     }   
     else if(this.radius>this.minRadius)
     {
         this.radius-=1;
     }
    
    }
}