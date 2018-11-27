
window.addEventListener("load",()=>{
    var canvas=document.querySelector('canvas');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    var c=canvas.getContext('2d');
    var mouse={
        x:undefined,
        y:undefined
    }
    //circle
    window.addEventListener("mousemove",function(event){
        mouse.x=event.x;
        mouse.y=event.y;
    })
    window.addEventListener("resize",function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        init();
    })
    var xSpeed=10;
    var ySpeed=10;
    var circle=[];
    for(let i=0;i<300;i++)
        {var x=Math.random()*(window.innerWidth-2*30) +30 ;
            var y=Math.random()*(window.innerHeight-60)+30;
            var dx=(Math.random()-0.5)*10;
            var dy=(Math.random()-0.5)*10;
            circle.push(new Circle(x,y,dx,dy));
        }
    function init(){
        circle=[];
        for(let i=0;i<100;i++)
        {var x=Math.random()*(window.innerWidth-2*30) +30 ;
            var y=Math.random()*(window.innerHeight-60)+30;
            var dx=(Math.random()-0.5)*10;
            var dy=(Math.random()-0.5)*10;
            circle.push(new Circle(x,y,dx,dy));
        }
    }
    function animate(){
       requestAnimationFrame(animate);
       c.clearRect(0,0,window.innerWidth,window.innerHeight);
       circle.forEach(circle=>circle.draw(c,mouse));
    //    if(x+30>window.innerWidth)
    //    {
    //        xSpeed=-xSpeed;
    //    }
    //    else
    //    if(x<=0)
    //    {
    //        xSpeed=-xSpeed;
    //    }

    //    if(y+30>window.innerHeight)
    //    {
    //        ySpeed=-ySpeed;
    //    }
    //    else
    //    if(y<=0)
    //    {console.log("inside");
    //        ySpeed=-ySpeed;
    //    }
       
    //    c.beginPath();
    //     c.clearRect(0,0,window.innerWidth,window.innerHeight);
        
        //  c.arc(x,y,30,0,Math.PI*2,true);
        // c.stroke();
        // circle.draw(c);
        // var bar=new Bar();
        // bar.drawBar(c);
        // x+=xSpeed;
        // y+=ySpeed; 
    }
    animate();
    
    //drawing a Rectangle
    // c.fillStyle="#fff231";
    // c.fillRect(10,20,50,40);
    // c.fillStyle="lightgreen"
    // c.fillRect(62,20,60,50);
    // //drawing line
    // c.beginPath();
    // c.moveTo(40,50);
    // c.strokeStyle="red";
    // c.lineTo(80,20);
    // c.stroke();
    // c.beginPath();
    // c.moveTo(80,20);
    // c.strokeStyle="green";
    // c.lineTo(120,50);
    // c.stroke();
    // c.beginPath();
    // c.moveTo(40,50);
    // c.strokeStyle="blue";
    // c.lineTo(120,50);
    // c.stroke();
    // //drawing Arc
    // c.beginPath();
    // c.strokeStyle="red";
    // c.arc(300,400,200,0,Math.PI*2,false);
    // c.stroke();
    //multiple circles
//     for(let i=0;i<1;i++)
//     {
//         let x=Math.random()*window.innerWidth;
//         let y=Math.random()*window.innerHeight;
//     let RED=Math.random()*255;
//     let GREEN=Math.random()*255;
//     let BLUE=Math.random()*255;
// console.log(RED);
// console.log(GREEN);
// console.log(BLUE);

// c.beginPath();
//         c.strokeStyle=`rgb(${RED},${GREEN},${BLUE})`;
//         c.arc(x,y,30,0,Math.PI*2,false);
    
//     c.stroke();
//     }
    
})
