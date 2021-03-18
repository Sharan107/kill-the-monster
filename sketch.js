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

  box1 = new Block(600, 100, 40, 40); 
  box2 = new Block(900, 150, 40, 40); 
  box3 = new Block(900, 200, 40, 40); 
  box4 = new Block(900, 250, 40, 40); 
  box5 = new Block(900, 300, 40, 40); 
  box6 = new Block(900, 350, 40, 40); 
  box7 = new Block(800, 400, 40, 40); 

  box8 = new Block(800, 100, 40, 40); 
  box9 = new Block(800, 150, 40, 40); 
  box10 = new Block(800, 200, 40, 40); 
  box11 = new Block(800, 250, 40, 40); 
  box12 = new Block(800, 300, 40, 40); 
  box13 = new Block(800, 350, 40, 40); 

  box14 = new Block(800, 100, 40, 40); 
  box15 = new Block(700, 150, 40, 40); 
  box16 = new Block(700, 200, 40, 40); 
  box17 = new Block(700, 250, 40, 40); 
  box18 = new Block(700, 300, 40, 40); 
  box19 = new Block(700, 350, 40, 40); 
  box20 = new Block(700, 400, 40, 40); 
  box21 = new Block(600, 450, 40, 40); 

  box22 = new Block(600, 100, 40, 40); 
  box23 = new Block(600, 150, 40, 40); 
  box24 = new Block(600, 200, 40, 40); 
  box25 = new Block(600, 250, 40, 40);
  box26 = new Block(600, 300, 40, 40);

ground=new Ground(450,550,900,10);
hero= new Hero(300,300,250); 
rope= new Rope(hero.body,{x:500,y:200});

monster= new Monster(750,530,50,50);


}

function draw() {
  background(backgroundImg);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display()
  ground.display();
  hero.display();
  rope.display();
  monster.display();

  Engine.run(engine);
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}