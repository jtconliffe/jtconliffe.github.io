
let eyeMotion = 0;
let numDrops =500;
  let drops = [];

function setup() {
  createCanvas(600,600);
  noStroke() ;
  for (let i = 0; i < numDrops; i++){
     drops[i] = new rainDrop(1, 0);
  }
}

function draw() {
  background(51,225,255);
  
  eyeMotion = map(mouseX, 0, 400, -5, 5, 1)
  console.log(mouseX + ", " + mouseY);
  
  for (let i = 0; i < numDrops; i++){
    drops[i].update();
    drops[i].show();
  }
}

class rainDrop{

  constructor(gravity, wind){
  
    this.xSpeed = wind;
    this.ySpeed = gravity + random(0,2);
 
    this.x = random(-2*this.xSpeed*(height/this.ySpeed),width-this.xSpeed*(height/this.ySpeed));
    this.y = random(0, -height);
  }
  update(){
   
    this.x += this.xSpeed;
    this.y += this.ySpeed;
 
    if (this.y > height){
      this.y = random(0, -height);
      this.x  = random(-2*this.xSpeed*(height/this.ySpeed),width-this.xSpeed*(height/this.ySpeed));
    }
  }
  show(){
   
    let c = color(255,255,255);
    fill(c);
    ellipse(this.x, this.y, 5,5)
  
  
  fill(c);
  ellipse(300,300,160,170);
  ellipse(300,500,290,300);
  ellipse(300,180,100,110);
  
  let b = color(102,51,0);
  fill(b);
  square(252.5, 60, 95);
  
  let a = color(0,0,0);
  fill(b);
  rect(241,130,120,30);
  
  fill(a);
  rect(252.5,100,95,30);
    
  ellipse(275 + eyeMotion,170,10,15);
  ellipse(305 + eyeMotion,170,10,15);
  ellipse(275,200,5,5);
  ellipse(280,202,5,5);
  ellipse(285,203,5,5);
  ellipse(290,204,5,5);
  ellipse(295,203,5,5);
  ellipse(300,202,5,5);
  ellipse(305,200,5,5);
  
  fill (c);
  rect(0,545,600,55);
  
    
  
  
  }
}