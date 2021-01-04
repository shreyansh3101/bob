
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob,bob2,bob3,bob4,bob5,box,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
box=createSprite(380,150,350,50)
	//Create the Bodies Here.

bob=new paper(280,400,1)
bob2=new paper(330,400,1)
bob3=new paper(380,400,1)
bob4=new paper(430,400,1)
bob5=new paper(480,400,1)
rope1=new rope(bob.body,{x:280,y:150})
rope2=new rope(bob2.body,{x:330,y:150})
rope3=new rope(bob3.body,{x:380,y:150})
rope4=new rope(bob4.body,{x:430,y:150})
rope5=new rope(bob5.body,{x:480,y:150})
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  
	rectMode(CENTER);
  background("white");
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob.display()
  bob2.display()
 
  bob3.display()
  bob4.display()
  bob5.display()
 
  drawSprites();
 
}



