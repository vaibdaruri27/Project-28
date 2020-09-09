class Stone{
    constructor(x,y,width,height){
        var options ={
            IsStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("sprites/stone.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        rectMode(CENTER);
        rect(image.x,image.y,pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,30);
    }
  }