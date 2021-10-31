var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2){
    isTouching();
  }
  if(keyWentDown("UP_ARROW")){
fixedRect.velocityY=-4;
fixedRect.velocityX=0;
  }
if(keyWentUp("UP_ARROW")){
fixedRect.velocityY=0;
fixedRect.velocityX=0;
}
if(keyWentDown("DOWN_ARROW")){
fixedRect.velocityY=4;
fixedRect.velocityX=0;
}
if(keyWentUp("DOWN_ARROW")){
fixedRect.velocityY=0;
fixedRect.velocityX=0;
}
  if(keyWentDown("LEFT_ARROW")){
  fixedRect.velocityX=-4;
fixedRect.velocityY=0;
   }
   if(keyWentUp("LEFT_ARROW")){
    fixedRect.velocityX=0;
  fixedRect.velocityY=0;
     }
  if(keyWentDown("RIGHT_ARROW")){
  fixedRect.velocityX=4;
  fixedRect.velocityY=0;
   }
   if(keyWentUp("RIGHT_ARROW")){
    fixedRect.velocityX=0;
    fixedRect.velocityY=0;
     }

  drawSprites();
}
function isTouching() {

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
}