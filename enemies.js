 class Enemies{
    
     constructor(x,y){
       this.x = x;
       this.y = y;
       this.width = 50;
       this.height = 50;
       this.velocityX = Math.round(random(-2,2));
       this.velocityY = Math.round(random(-2,2));
     }
     


     display(){

       rect(this.x,this.y,this.width,this.height);   
     }
 } 