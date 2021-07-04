class paper{

    constructor(x,y,radius){

     

      var option = {
        restitution:0.4,
        density:1,
      }
      this.radius=radius  
      this.body=Bodies.circle(x,y,radius,option)
      this.image=loadImage("paper.png") 
      World.add(world,this.body)
    }

    display(){

        push()
        translate(this.body.position.x,this.body.position.y  );
        rotate(this.body.angle)
       
        imageMode(RADIUS);
        image(this.image, 0, 0 , this.radius , this.radius) 
        pop()

    }

}
//to display circular body
//ellipse(x,y, radius along X , radius along Y)