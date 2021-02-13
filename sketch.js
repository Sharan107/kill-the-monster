const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var backgroundImg;

function preload() {
//preload the images here
backgroundImg=loadImage("images/bg.png");

}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
	world = engine.world;

  // create sprites here

ground=new Ground(450,500,900,10);
hero= new Hero(100,100);
rope= new Rope(hero.body,{x:100,y:100});

}

function draw() {
  background(backgroundImg);

  ground.display();
  hero.display();
  rope.display();
  Engine.run(engine);
}

function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}