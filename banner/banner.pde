// Arushi Malhotra 2017
// draw an ellipse that follows the cursor and changes color

void setup(){
  size(800,250);
  background(255);
}

void draw() {
  if(mousePressed) {
    fill(0);
  }else{
    fill(225);
  }
  ellipse(mouseX, mouseY, 50, 50);
}