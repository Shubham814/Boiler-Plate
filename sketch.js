
var fixedRect, movingRect;
var gameObject1, gameObject2;



function setup() {
  createCanvas(1200,700);
 
 
  movingRect = createSprite(800, 350,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(1000, 350, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(600, 350, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 350, 50, 50);
  gameObject2.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




