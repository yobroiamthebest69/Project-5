class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }
display(){
  console.log(this.body.speed)
  if(this.body.speed<2.3){
    super.display();
  }
  else{
    push();
    World.remove(world, this.body);
    tint(255,this.visibility)
    this.visibility = this.visibility -5
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
  }
}
};