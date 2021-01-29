
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone1;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	//boy1 = Bodies.rectangle(200,300,80,80);
	//World.add(world,boy1);
	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(1200,150,30);
	mango5=new mango(1050,130,30);
	mango6=new mango(900,200,30);
	mango7=new mango(1000,70,30);
	stone1=new Stone(245,470,10);
	rope1=new Rope(stone1.body,{x:245,y:470});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	boy1 = new ground(200,400,30,30);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);

  image(boy,boy1.body.position.x,boy1.body.position.y,250,250);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();
  //boy1.display();
  rope1.display();
  groundObject.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope1.fly();
}

function keyPressed(){
	if(keyCode === 32){
		rope1.attach(stone1.body);
	}
}

function detectollision(stone,mango){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<= stone.radius + mango.r){
	Matter.Body.setStatic(mango.body,false);
}else{
	Matter.Body.setStatic(mango.body,true);
}
}