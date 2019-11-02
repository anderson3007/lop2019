let x = 100;
let y = 100;
let x1 = 20
let x2 = 30
let x3 = 40
let i =0;

function setup() {
  createCanvas(900, 512);
  fill(255, 0, 0);
}

function draw() {
  i = i +0.2
  background('100');
  
    x1= x1+i;
    x2= x2+i;
    x3= x2+i;
  
  rect(x1, 30, 30, 55);
  rect(x2, 130, 30, 55);
  rect(x3, 230, 30, 55);
  
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
  if(x3 >=920){
    i =0;
    x1=0;
    x2=100;
    x3=300;
  }
  ellipse(x, y, 50, 50);
}
