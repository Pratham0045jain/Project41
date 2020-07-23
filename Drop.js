class Drop {
    constructor(x,y,radius) {
      var options = {
        'restitution':0,
        'friction':0,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
      Matter.Body.setVelocity(this.body,{x:0 , y:10});
      
    }
    display(){

      if(this.body.position.y > 900){
        this.body.position.y = 0;
        Matter.Body.setVelocity(this.body,{x:0 , y:10});
      }

      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      
    }
  }
  