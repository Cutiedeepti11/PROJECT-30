class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 20
        }
        this.pointB = pointB
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    fly(){
        this.Sling.bodyA = null;
    }

    attach(ball){
        this.Sling.bodyA = ball;
    }

    display(){
        if(this.Sling.bodyA){
            push()
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }
    }
    
}