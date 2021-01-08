class Bob
{
  constructor(xpos,ypos,radius)
  {     
      var options={
          // isStatic: false,
          resitution:1.0,
          density:0.8
      }

    this.radius = radius  
    this.ball = Bodies.circle(xpos,ypos,radius/2,options);

    World.add(world,this.ball)
  }

  display()
  {

    var position = this.position
     

    ellipse(this.ball.position.x,this.ball.position.y,this.radius)
    // Matter.Body.applyForce(this.body,this.body.position,)
  }

    
    
}