class Log extends BaseClass{
  constructor(x,y,height,angle){

    isStatic: false
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);


    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }

  
  }
}
