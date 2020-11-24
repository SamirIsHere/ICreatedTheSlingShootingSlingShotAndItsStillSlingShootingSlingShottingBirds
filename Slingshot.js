class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.SlingShoot = loadImage('sprites/sling1.png')
        this.SlingShooting = loadImage('sprites/sling2.png')
        this.StillSlingShooting = loadImage('sprites/sling3.png')
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.StillSlingShooting, pointA.x - 20, pointA.y - 10, 10, 20);

        }
        image(this.SlingShoot, 200, 20);
        image(this.SlingShooting, 170, 20);
        
    }
    
}