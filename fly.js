class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 450
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }


    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(5);
        stroke("black")
        line(pointA.x,pointA.y,pointB);
        }
    
    
}
