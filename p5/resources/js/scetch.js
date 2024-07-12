 function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Draw a rectangle with the width of canvas's width and the height of canvas's height
  noStroke();
  fill(80,80,200,120);
  rect(0,0,width, height);

  // Draw a grid of diagonal lines
  for(let j = 0; j< height; j+=20){
    for(let i = 0; i < width; i+=80){
      stroke(i, 0, j, 120);
      strokeWeight(4);

      // Alternate the direction of the diagonal line
      // Note that j % 40 returns the remainder of j / 40
      // This means that every time j is a multipe of 40 the diagonal line will be drawn from top-left corner to bottom right corner
      if(j % 40 === 0){
        line(i + 10, 20 + j, i, j);
      } else {
        line(i, 20 + j, i + 10, j);
      }
    }
  }

  // Draw repeating columns of retangles and ellipses
  noStroke();
  for(let i = 0 ; i < height; i += 80){
    for(let j = 0; j < width * 1.5; j += 160){
      fill('pink');
      rect(j - 125, i+40, 20);

      fill('purple');
      circle(j - 35, i, 20);
    }
  }
}