class Stone {
    constructor(x,y,radius){
var options ={
    isStatic: true,
    restitution: 0,
    friction: 1,
    density: 1.2
}
//this.image = loadImage("images/stone.png");
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);
    }
    display(){
var a = this.body.position;
//var b = this.body.angle;
push();
//translate(a.x,a.y);
//rotate(b);
ellipseMode(CENTER);
ellipse(a.x,a.y,this.radius);
pop();
    }
}