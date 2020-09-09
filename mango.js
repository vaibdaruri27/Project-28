class Mango{
    constructor(x,y,radius){
        var options ={
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("sprites/mango.png")
        this.radius = radius;
        World.add(world,circle);
    }
    display(){
        var pos =this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(image.x,image.y,20,20);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}