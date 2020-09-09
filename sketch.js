
//Constants For Matter.JS
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


//Variables 
var engine,world;

function setup() {
  //A Canvas 800 by 700
	createCanvas(1200, 700);

  //Engine & World
	engine = Engine.create();
  world = engine.world;
  
  //Create the Bodies Here.
  
  //Ground
  ground1 = new Ground(0,695,2800,15);

  //Tree
  tree1 = new Tree(960,459,600,600);
  
  //Stone
  stone1 = new Stone(200,200,50,30);

  //Boy
  boy1 = new Boy(230,635,100,50);

  //Mango
  mango1 = new Mango(970,410,50);
  mango2 = new Mango(850,370,50);
  mango3 = new Mango(970,310,50);
  mango4 = new Mango(1100,370,50);
  mango5 = new Mango(1150,440,50);
  mango6 = new Mango(785,430,50);

  //Connecting Chain & Stone
  chain = new Const(boy1.body,stone1.body);

  //Running Engine
	Engine.run(engine);
  
}


function draw() {
  //RectMode(CENTER);
  rectMode(CENTER);

  //Engine Update
  Engine.update(engine);

  //Black Background
  background("aqua");

  //Display boy
  boy1.display();

  //Display Ground
  ground1.display();

  //Display Tree
  tree1.display();

  //Dislay stone
  stone1.display();

  //Display mango1-2-3-4-5
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  //Display chain
  chain.display();

  //DrawSprites();
  drawSprites();
 
}



