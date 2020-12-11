const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0
var particle1
var turn = 0
var gameState = Start 
var Start
var End

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

    for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

    for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

     for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

     for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  console.log(height - divisionHeight/2);
  console.log(divisions[1]);

}

function draw() {
  background("white");
  textSize(20);
  text("Score : "+score,20,30);
  text("Turn: " + turn, 700, 30);
  Engine.update(engine);
 
  textSize(15);
  text("10 points", 30, 550);
  text("20 points", 135, 550);
  text("30 points", 215, 550);
  text("40 points", 310, 550);
  text("50 points", 395, 550);
  text("40 points", 485, 550);
  text("30 points", 575, 550);
  text("20 points", 665, 550);
  text("10 points", 755, 550);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
  }
 
   if (gameState == Start){
    
    keyPressed(); 
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
  }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }

  if(particles.position.x >= 0 && particles.position.x <= 80 && particles.position.y >= 650) {
     score = score + 10;
     particle = null;
 }

  if(particles.position.x >= 90 && particles.position.x <= 170 && particles.position.y >= 650) {
    score = score + 20;
    particle = null;
 }

  if(particles.position.x >= 180 && particles.position.x <= 260 && particles.position.y >= 650) {
    score = score + 30;
    particle = null;
 }

  if(particles.position.x >= 270 && particles.position.x <= 350 && particles.position.y >= 650) {
    score = score + 40;
    particle = null;
 }

  if(particles.position.x >= 360 && particles.position.x <= 440 && particles.position.y >= 650) {
    score = score + 50;
    particle = null;
 }

  if(particles.position.x >= 450 && particles.position.x <= 530 && particles.position.y >= 650) {
    score = score + 40;
    particle = null;
 }

  if(particles.position.x >= 540 && particles.position.x <= 620 && particles.position.y >= 650) {
    score = score + 30;
    particle = null;
 }

  if(particles.position.x >= 630 && particles.position.x <= 710 && particles.position.y >= 650) {
    score = score + 20;
    particle = null;
 }

  if(particles.position.x >= 720 && particles.position.x <= 800 && particles.position.y >= 650) {
    score = score + 10;
    particle = null; 
  }

  if(turn > 5){
    gameState === End;
  }
 }
else {if(gameState === End){
   gameOver();
  }
 } 
}

function keyPressed() {
  if(keyCode === 32 && gameState === Start){
  particles = new Particle(mouseX, 0, 50);
  turn = turn + 1;
  }  
  }

function gameOver() {
if(gameState === End){
textSize(30);
text("Game Over", 380, 400);
}
} 