class Hero{

    constructor(x,y,r){

    var options={
        //isStatic:false,
        density:1,
        frictionAir:1
    }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("images/superhero-01.png");
    this.body=Bodies.circle(x,y,(this.r)/2,options);
    World.add(world,this.body);
    }

    display(){

    var pos=this.body.position;

    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,300,200);
    pop() 
}
}