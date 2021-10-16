var PLAY = 1;
var END = 0;
var bag1, bag2
var fish1, fish2, fish3, fish4
var bottle
var sea
var score=0, plasticcollected=0, frameCount, fishGroup, plasticGroup
var scuba, scubaimg
var gameState = PLAY
var gameOver, gameOverimg
var restart, restartimg

var bag1img, bag2img
var fish1img, fish2img, fish3img, fish4img
var bottleimg
var seaimg

function preload(){
seaimg = loadImage("sea.png")
fish1img = loadImage("fish 1.jpg")
fish2img = loadImage("fish 2.jpg")
fish3img = loadImage("fish 3.png")
fish4img = loadImage("fish 4.jpg")
scubaimg = loadImage("diver.png")
bag1img = loadImage("bag1.png")
bag2img = loadImage("bag2.png")
bottleimg = loadImage("bottle.png")
gameOverimg = loadImage("gm.png")
restartimg = loadImage("res.png")
}

function setup() {
  createCanvas(400,400);
 sea = createSprite(200,200)
 sea.addImage("seaimage",seaimg)
 sea.scale=0.9
 sea.velocityX=-1
 sea.x = sea.width/8

 scuba = createSprite(80,200)
 scuba.addImage("scub", scubaimg)
 scuba.scale=0.2

 fishGroup = createGroup();
 plasticGroup = createGroup();

 gameOver = createSprite(200,200)
 gameOver.addImage("game", gameOverimg)
 gameOver.scale=0.2
 gameOver.visible = false

 restart = createSprite(200,280)
 restart.addImage("restart", restartimg)
 restart.scale=0.2
 restart.visible = false
 
 

 
}

function draw() {
  
  
  
  background(180)
  

    


   if (gameState===PLAY){
     
           
    if(keyDown("up")){
        scuba.y=scuba.y-5
    };
    if(keyDown("down")){
        scuba.y=scuba.y+5
    };
   
    if(sea.x<40){
      sea.x = sea.width/8;
    }
    spawn()
   
    
    
    spawnplastic()

    if(plasticGroup.isTouching(scuba)){
      plasticcollected=plasticcollected+1
      plasticGroup.destroyEach()
    }
    score = score + Math.round(getFrameRate()/60);
   
    if(fishGroup.isTouching(scuba)){
        gameState = END;
    }

}

else if (gameState === END) {
        gameOver.visible = true;
        restart.visible = true
        
     
       
       
        sea.velocityX = 0;
        
       
       
      fishGroup.destroyEach();
      plasticGroup.destroyEach();
      scuba.destroy()
       
      if(mousePressedOver(restart)) {
        reset();
       
     }
        
}

  
         
    drawSprites()
    textSize(20)
    stroke("yellow")
      fill("yellow")
    text("Plastic collected: "+ plasticcollected, 20,60);

    text("Score: "+ score, 20,30);
  

}




function spawn() {
        if (frameCount % 300 === 0) {
          rand = Math.round(random(1, 4));
          if (rand === 1) {
            fish1 = createSprite(410,380)
                         fish1.addImage("boss1", fish1img);
              fish1.lifetime = 410;
              fish1.velocityX  = -1;
              fish1.scale=0.1
              fish1.y=random(10,390) 
              fishGroup.add(fish1); 
          }
          
          if (rand === 2) {
            fish2 = createSprite(410,310);
            fish2.addImage("boss2", fish2img)
                 fish2.lifetime = 410;
              fish2.velocityX = -1;
              fish2.scale = 0.1
              fish2.y=random(0,390)  
              fishGroup.add(fish2);
              
          }   

          if (rand === 3) {
                fish3 = createSprite(410,240);
                fish3.addImage("boss3", fish3img)
                     fish3.lifetime = 410;
                  fish3.velocityX = -1;
                  fish3.scale = 0.1
                  fish3.y=random(10,390)          
                  fishGroup.add(fish3);
              }   
              if (rand === 4) {
                fish4 = createSprite(410,110);
                fish4.addImage("boss4", fish4img)
                     fish4.lifetime = 410;
                  fish4.velocityX = -1;
                  fish4.scale = 0.01
                  fish4.y=random(100,390)  
                  fishGroup.add(fish4);
                  
              }   
      
        }
         
}
function spawnplastic() {
        if (frameCount % 200 === 0) {
          rand = Math.round(random(1, 3));
          if (rand === 1) {
            bag1 = createSprite(410,380)
                         bag1.addImage("bag1", bag1img);
              bag1.lifetime = 410;
              bag1.velocityX  = -1;
              bag1.scale=0.01
              bag1.y=random(10,390) 
              plasticGroup.add(bag1); 
          }
          
          if (rand === 2) {
            bag2 = createSprite(410,310);
            bag2.addImage("bag2", bag2img)
                 bag2.lifetime = 410;
              bag2.velocityX = -1;
              bag2.scale = 0.1
              bag2.y=random(10,390)  
              plasticGroup.add(bag2); 
      
              
          }   

          if (rand === 3) {
                bottle = createSprite(410,240);
                bottle.addImage("bottle", bottleimg)
                     bottle.lifetime = 410;
                  bottle.velocityX = -1;
                  bottle.scale = 0.1
                  bottle.y=random(10,390)
                  plasticGroup.add(bottle);           
                  
              }   
              
      
        }
         
}

function reset(){
  gameState=PLAY
  fishsGroup.destroyEach()
  plasticGroup.destroyEach()
  score=0
  plasticcollected=0
  

}