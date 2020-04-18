var car
var wall


function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 30, 30);
  wall = createSprite(1300,900, 60, 1600);
  car.shapeColor = "white"
  wall.shapeColor = "white"
  car . velocityX = rand
 
  
}







function draw() {
  background(5,5,5);  

  var rand = randomNumber(1,1);
console.log (rand)


  if(rand === 1){
car.velocityX <=100 
car.shapeColor = "yellow"

  }
  drawSprites();
}