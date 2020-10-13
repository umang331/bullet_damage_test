var bullet,wall;
var thickness,speed,weight;



function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed
  bullet.shapeColor = "white"

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = rgb(80,80,80)
}

function draw() {
  background(0,0,0);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0)
    }

    

    if(damage<10)
    {

      wall.shapeColor = color(0,255,0)
    }
  }  
  drawSprites();
  textSize(24)
  fill("yellow")
  text("zoom out to see everything", 200,50)
  console.log(wall.velocityX)
}
function hasCollided(lbullet,lwall){

  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge) {
      return true;
    }
    return false;
}