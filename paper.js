class Paper {

    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
           
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius 
        this.paprimage = loadImage('sprites/paper.png');
        World.add(world,this.body);
    }
    display(){
        
    

        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.paprimage, 0, 0,50,50);
        pop();
    }















    
}