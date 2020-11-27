
var monkey,monkey_running, monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 monkeyImage = loadImage("sprite_0.png");
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(75,345,1000,5);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  obstacle = createSprite(300,925,10,10);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  
  banana = createSprite(300,900,10,10);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.1;
  
   obstaclesGroup = createGroup();
   FoodGroup = createGroup();

}


function draw() {
background(255,250,250);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,100);
  
  
  spawnBananas();
  spawnObstacles();
  
  if (ground.x < 100){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;

    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
   
   obstaclesGroup.setLifetimeEach(-1);
  spawnObstacles();
  drawSprites();
  spawnBananas();
  
  drawSprites();
}




function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,380,40,10);
    obstacle.y = Math.round(random(325,325));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    
    
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
   
  }
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(200,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
    
    banana.lifetime = 300;
       FoodGroup.add(banana);

  }
}

function reset(){
  gameState = PLAY;
  obstaclesGroup.destroyEach();
  score = 0;
 
}




