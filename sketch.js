var PLAY = 1
var END  = 0
var gameState = PLAY
var score
var score1

var jaxon, jaxxon1, jaxon2
var coin
var BOMB
var energydrink
var path





function preload(){
  //pre-load images
jaxonImage = loadAnimation ("runner-1.png","runner-2.png")
coinImage = loadImage ("coin.png")
bombImage = loadImage ("bomb.png")
energydrinkImage = loadImage ("energyDrink.png")
pathImage = loadImage ("path.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here

  jaxon = createSprite(200,200,20,50);
  jaxon.addAnimation("Jaxon", jaxonImage);
  // trex.addAnimation("collided",trex_collided)
  jaxon.scale = 0.03;
  
  path = createSprite(200,180,400,20);
  path.addImage("path",pathImage);
  path.y = path.height/2;
  path.velocityY = 2;
 
  
}


function draw() {
  background(0);
if (gameState  === PLAY){
  if (path.y > 400) {
    path.y = height/2
    }
    path.velocityY = 2
    path.depth = jaxon.depth
    jaxon.depth = jaxon.depth + 1;

   if ( keyDown("right")) {
   jaxon.x += 2}
  
    if (keyDown("left")){
    console.log("Hello"+ 5)
    jaxon.x -= 2
    }
    

    spawncoin ()
     spawnenergydrink ()
    spawnBOMB ()

   if (energydrink.isTouching(jaxon)){
   Text  =("energydrink = score",50,50)
   score  =  score +1 
   }
   if (coin.isTouching(jaxon)){
     Text = ("point = score1",350,50)
     score1 = score1 +5
   }
 

 

   if (BOMB.isTouching(jaxon)){
    gameState = END
   }
  
   








   


  } 
  if (gameState === END) {
    BOMB.velocityY  = 0
    energydrink.velocityY = 0
    coin.velocityY = 0
    BOMB.lifetime = -1
    energydrink.lifetime = -1
    coin.lifetime = -1
   }
  


    
  
 
 
   


  

  


  drawSprites()
}


function spawnBOMB() { 
  if (frameCount %100 === 0) {
  bomb = createSprite(200,100,40,10);
  bomb.addImage(bombImage) 
  bomb.x = Math.round(random(100,320))
  bomb.velocityY = 2
  bomb.scale = 0.1; 
  bomb.lifetime = 70}
  
  console.log ("hello")
}

function spawnenergydrink() { 
  if (frameCount %70 === 0) {
  energydrink = createSprite(220,160,40,10);
  energydrink.addImage(energydrinkImage) 
  energydrink.x = Math.round(random(110,320))
  energydrink.velocityY = 2
  energydrink.scale = 0.1; 
  energydrink.lifetime = 200}
  console.log ("hello")
}

function spawncoin() { 
  if (frameCount %70 === 0) {
  coin = createSprite(240,130,40,10);
  coin.addImage(coinImage) 
  coin.x = Math.round(random(120,320))
  coin.velocityY = 2
  coin.scale = 0.5; 
  coin.lifetime = 200}
  console.log ("hello")
}