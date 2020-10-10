class Tree{
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,200,400,options);
        this.image = loadImage("Images/tree.png");
        this.width = 400;
        this.height = 400;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}