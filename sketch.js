const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }


  var ball_options = {
restitution:10.0


  }

  object = Bodies.rectangle(200,380,400,20,object_options);
  World.add(world,object);

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);



  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}