var rectangle1, rectangle2;

function setup() {
  createCanvas(1200,800);
  rectangle1 = createSprite(400, 200, 80, 50);
  rectangle2 = createSprite(200, 200, 50, 80);
  rectangle1.shapeColor = "yellow";
  rectangle2.shapeColor = "yellow";
}

function draw() {
  background("purple");  
  rectangle2.x = mouseX;
  rectangle2.y = mouseY;

  if(rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2 && rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2
    && rectangle1.y-rectangle2.y<rectangle1.height/2+rectangle2.height/2 && rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2){
    rectangle1.shapeColor = "green";
    rectangle2.shapeColor = "green";
  }
  else{
    rectangle1.shapeColor = "yellow";
    rectangle2.shapeColor = "yellow";
  }
  drawSprites();
}