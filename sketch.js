
var car,wall,speed,weight;
function setup() {
  createCanvas(1200,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,200); 
  wall.shapeColor = 'red';
  car.shapeColor = 'blue';
}
/* thisis draw function */

function draw() {
  background(0,0,0); 
  speed = random(10,20);
  weight = random(400,1500);
  car.velocityX = speed;
  console.log("inside draw"); 

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation= 0.5 * weight * speed * speed /22509;

      if(deformation>8) {
        car.shapeColor = color(255,0,0);
      }
      if(deformation<8 && deformation>5) {
        car.shapeColor = color(230,230,0);
      }
      if(deformation<5) {
        car.shapeColor = color(0,255,0);
      }
  }

  drawSprites();
}


function reset()
{
  car.destroyEach();
  car = createSprite(50,200,50,50);
  car.velocityX = 0;
  wall = createSprite(1000,200,60,200); 
}
