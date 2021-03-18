class Block{

constructor(x,y){

var options={
    isStatic:false,
    restitution:0.8,
    density:20,
    friction:1.0
}

this.body=Bodies.rectangle(x,y,50,50,options);
this.x=x;
this.y=y;
World.add(world,this.body);
}

display(){
 
    var pos =this.body.position;
     var angle = this.body.angle; 
     push();
     translate(pos.x, pos.y); 
     rotate(angle);
     rectMode(CENTER); 
     strokeWeight(4);
     stroke("black"); 
     fill("red");
     rect(0, 0,50,50);
     pop();
}

}