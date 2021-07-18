var harry, harryImage;
var leftArrow;
var backgroundImg;
var background;
var emotions = [];
var  enemy;
var ground;
var score = 0; 
var sound;


function preload(){

   
    backgroundImg = loadImage("bg.jpg");
     sound  = loadSound("checkPoint.mp3");
}

function setup(){
 
 createCanvas(windowWidth,windowHeight);


     
      ground = createSprite( width/2, height/2, width,height);
      ground.velocityY  = -2 ; 
      ground.addImage(backgroundImg);
      ground.scale = 2.5;

      harry = createSprite(width/2,height/2,50,50);

      greenGroup = new Group();
      redGroup   = new Group();
       
}

  function spawnEnemies(){
    
        if(frameCount % 20 === 0) {
   
          enemy_red = createSprite(random(50,width-100),random(160,height-50),25,25);
          enemy_red.velocityY = Math.round(random(-2,2));
          enemy_red.velocityX = Math.round(random(-2,2));
          enemy_red.shapeColor = "red";
          enemy_red.lifetime = 100;
          redGroup.add(enemy_red);
          
          if(frameCount % 50 === 0 ){

            enemy_g = createSprite(random(50,width-100),random(160,height-50),50,50);
            enemy_g.velocityY = Math.round(random(-2,2));
            enemy_g.velocityX = Math.round(random(-2,2));
            enemy_g.lifetime = 100;
           
          enemy_g.shapeColor = "green";

          emotions.push(enemy_g);
 
          greenGroup.add(enemy_g);

          }
          
          
      
       //     enemy = new Enemies(random(50,width-100),random(160,height-50));

              // enemy.velocityX = 5;
                //enemy.velocityY = Math.round(random(-2,2));
                //console.log(enemy.velocityX);
                emotions.push(enemy_red); 
            
              //  enemy.display();
             // for(i = 0 ; i<emotions.length; i++ ){
               // emotions[i].display(); 
          
    // } 


    }
  }


function draw(){

    background(0);
   
    console.log(ground.y);


     
   if (keyDown("a")){
        harry.x = harry.x-5;
       } 

    if (keyDown("d")){
        harry.x = harry.x+5;
       } 
    if (keyDown("s")){
        harry.y = harry.y+5;
       } 
     if (keyDown("w")){
        harry.y = harry.y-5;
       } 
     
       spawnEnemies();

   button1 = createButton("up"); 
   button1.position(170,630);
   button1.mousePressed(up);

  if(ground.y<250){
    // make it smooth
     ground.y = height/2;
  }   
 
  if( harry.isTouching(greenGroup)){
       greenGroup.destroyEach();
       score ++ ;
       sound.play();
  } 

  
  if( harry.isTouching(redGroup)){
    redGroup.destroyEach();
    score -- ;
}
    
 
drawSprites();
textSize(20) ;

text(mouseX+','+mouseY,mouseX,mouseY); 

text("Score:"+score,100,70);

}

function up(){
  harry.y = harry.y-5;
}