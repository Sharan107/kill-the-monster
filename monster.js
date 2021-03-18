class Monster{

    constructor(x,y,width,height){

        var options={
            isStatic:false,
            density:1.5
        }

        this.body=Bodies.rectangle(x,y,width,height)
        this.image=loadImage("images/Monster-02.png");
        World.add(world,this.body);
    }

    display(){

      imageMode(CENTER);
      image(this.image,this.body.x,this.body.y,this.body.width,this.body.height);   
    }
}
