
var runner , runnerImg , runnercollided;
var road , roadImg1 ;

function preload(){
  //pre-load images
runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
roadImg1 = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200,50,200);
  road.addImage(roadImg1);
  road.scale = 0.8;
  road.velocityY = 1.2;
  road.y = road.height/4;

  runner = createSprite(200,370,20,20);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.04;

  
  

}

function draw() {
  background("black");
if(road.y > 400 ){
  road.y = road.height/8;
}


  drawSprites();
}
