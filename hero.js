class Hero{

    constructor(x,y,r){

    var options={
        isStatic:false,
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
    
    image(this.x,this.y,this.r);
    }
}