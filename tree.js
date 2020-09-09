class Tree{
    constructor(x,y,width,height){
        var option ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("sprites/tree.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(image.x,image.y,600,600);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,500,500);
    }
}