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

ground=new Ground(450,550,900,10);
hero= new Hero(300,300,10);
rope= new Rope(hero.body,{x:500,y:200});

block= new Block(550,530);
block2= new Block(550,500);
block3= new Block(550,470);
block4= new Block(550,440);
block5= new Block(550,410);
block6= new Block(550,380);
block7= new Block(550,350);

block8= new Block(600,530);
block9= new Block(600,500);
block10= new Block(600,470);
block11= new Block(600,440);
block12= new Block(600,410);
block13= new Block(600,380);

block14= new Block(650,530);
block15= new Block(650,500);
block16= new Block(650,470);
block17= new Block(650,440);
block18= new Block(650,410);
block19= new Block(650,380);
block20= new Block(650,350);
block21= new Block(650,320);

block22= new Block(700,530);
block23= new Block(700,500);
block24= new Block(700,470);
block25= new Block(700,440);
block26= new Block(700,410);

}

function draw() {
  background(backgroundImg);

  ground.display();
  hero.display();
  rope.display();

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  Engine.run(engine);

}

function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}