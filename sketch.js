
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var sling;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;

function preload()
{
	boyImage=loadImage("images/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground (400,600, 800, 15); 
	tree = new Tree(600,400);

	boy=createSprite(270,440,50,50);
	boy.addImage(boyImage);
	boy.scale=0.125
	stone = new Stone(200,500,40,40);

	mango1=new Mango(500,300,20);
	//mango2=new Mango(600,300,20);
	mango3=new Mango(640,340,20);
	mango4=new Mango(600,250,20);
	mango5=new Mango(650,250,20);
	mango6=new Mango(550,250,20);
	mango7=new Mango(730,310,20);
	mango8=new Mango(720,350,20);
	mango9=new Mango(530,360,20);
	mango10=new Mango(680,300,20);

	sling=new Sling(stone.body,{x:200,y:370});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
    
  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  //mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  sling.display();

  detectCollision(stone,mango1);
  //detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    sling.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		sling.attach(stone.body);
	}
}



