class rope{
constructor(bodyA,pointB)
{

var options = {
bodyA:bodyA,

pointB:pointB,
stiffness:0.4,
length:10
}
this.pointB=pointB
this.rope = Constraint.create(options);
World.add(world,this.rope);

}

display(){
    push()
var pointA=this.rope.bodyA.position;
var pointB=this.pointB
strokeWeight(4)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()

}






}