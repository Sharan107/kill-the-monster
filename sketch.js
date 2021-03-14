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

block= new Block(550,530);
block2= new Block(550,530);
block3= new Block(550,530);
block4= new Block(550,530);
block5= new Block(550,530);
block6= new Block(550,530);
block7= new Block(550,530);

block8= new Block(600,530);
block9= new Block(600,530);
block10= new Block(600,530);
block11= new Block(600,530);
block12= new Block(600,530);
block13= new Block(600,530);

block14= new Block(650,530);
block15= new Block(650,530);
block16= new Block(650,530);
block17= new Block(650,530);
block18= new Block(650,530);
block19= new Block(650,530);
block20= new Block(650,530);
block21= new Block(650,530);

block22= new Block(700,530);
block23= new Block(700,530);
block24= new Block(700,530);
block25= new Block(700,530);
block26= new Block(700,530);

ground=new Ground(450,550,900,10);
hero= new Hero(300,300,250); 
rope= new Rope(hero.body,{x:500,y:200});

monster= new Monster(750,530,50,50);


}

function draw() {
  background(backgroundImg);

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
  block26.display()
  ground.display();
  hero.display();
  rope.display();
  monster.display();

  Engine.run(engine);

}

function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}