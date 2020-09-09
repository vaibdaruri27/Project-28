class Const{
    constructor(bodyA,bodyB){
       var option ={
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 0.04,
           length: 10
       }
       this.const = Constraint.create(option);
       World.add(world, this.const);
    }
    display(){
        var posA = this.const.bodyA.position;
        var posB = this.const.bodyB.position;
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}

