class particle{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0.6,
            'friction':0.4,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        noStroke();
       fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}