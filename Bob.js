class Bob{

    constructor(x,y){
  var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:0.7
  }
  this.body = Bodies.circle(x,y,50,options);
  World.add(world,this.body);
}

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("blue");
   ellipse(0,0,50,50);
    pop();
}
}