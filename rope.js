class Rope{
    constructor(bodyA,pointB){
var options ={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10
}
this.pointB = pointB;
this.rope = Constraint.create(options);
World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA = bodyA;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        if(this.rope.bodyA){
var c = this.rope.bodyA.position;
var d = this.pointB;
push();
strokeWeight(3);
line(c.x,c.y,d.x,d.y);
pop(); 
    }
}
    
}