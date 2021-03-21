class Monster{

    constructor(x,y,width,height){

        var options={
            isStatic:false,
            density:1.5
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height)
        this.image=loadImage("images/Monster-02.png");
        World.add(world,this.body);
    }

    display(){

    push(); 
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height); 
    pop(); 
}   
    }

