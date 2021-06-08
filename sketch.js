
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400)

	//Create the Bodies Here.

	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	};

var particle_options = {
	restitution = 0.4,
	friction: 0.02
}

var rotator_options = {
	isStatic: true
};

var block1_options = {
	isStatic: true
};

var block2_options = {
	isStatic: true
};

particle1 = Bodies.circle(220,10,10,paticle_options);
World.add(world.particle1);

rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator1);

var plane_options = {
	isStatic: true
};

block1 = Bodies.rectangle(200,390,400,20,block1_options);
World.add(world,block1);

block2 = Bodies.circle(100,10,20,block2_options);
World.add(world,block2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  left.show();
  right.show();
  
  Engine.update(engine);
  Matter.Body.rotate (rotator1,angle)
  push();
translate (rotator1.position.x,rotator1.position.y);
roatate (angle);
rect(0,0,150,20);
pop ();
angle1+ 0.2;

function keyPressed() {
	if (keyCode ===UP_ARROW) {
		function hForce()
		{
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		}
		
		function vForce()
		{
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
		}
		
		function pForce()
		  {
			Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0});
		
		  }
	}
}

  drawSprites();
 
}



