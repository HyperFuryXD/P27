
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bo4,bob5;
var roof,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	  
	ground = new Ground(400,700,800,)
	//Create the Bodies Here.
	
	bob1 = new Bob(200,100);
	bob2 = new Bob(300,100);
	bob3 = new Bob(400,100);
	bob4 = new Bob(500,100);
	bob5 = new Bob(600,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

  drawSprites();
 
}



