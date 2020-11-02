var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="black";
  wall=createSprite(700,200,60,200);
  wall.shapeColor="yellow";
  speed=random(55,90);
  weight=random(500,1500);

}

function draw() {
  background(255,255,255);  
  car.x = World.mouseX;
  car.y = World.mouseY;
  if(isTouching(car,wall)){
    deformation=.5*weight*speed*speed/22500;
  if(deformation > 180){
    car.shapeColor="red";
  }
  if(deformation <= 180 && deformation > 80){
    car.shapeColor="blue";
  }
    if(deformation <= 80 ){
      car.shapeColor="green";
    }
  

  }
  
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  
   }
   else {
   return false;
   }

}