class Paper {
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
        display()
{
        var PaperPos = this.body.position;
    
        push()
        translate(PaperPos.x,PaperPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    
 

    }

}