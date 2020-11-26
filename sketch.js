

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var divs = [];
var particles = [];
var plinkos = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  for (var k = 0; k <=width; k = k + 80) {
    divs.push(new Div(k, height - divisionHeight/2, 10, divisionHeight));
  }
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10))
 }
  for(var j = 40; j<=width; j = j + 50){
    plinkos.push(new Plinko(j, 75))
  }
  //ground = new Div();
   for(var j = 15; j<= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175))
  }
}
function draw() {
  background("black");  
  Engine.update(engine);
 // drawSprites();
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < divs.length; k++){
    divs[k].display();
  }
  for(var a = 0; a < particles.length; a++){
    plinkos[a].display();
  }
}