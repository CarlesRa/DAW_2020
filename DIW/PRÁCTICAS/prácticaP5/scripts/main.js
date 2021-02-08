
var numRandoms = [];
for (let i = 0; i < 20; i++) {
  numRandoms.push(Math.random() * 255);
}
function setup() {
  createCanvas(windowWidth, windowHeight / 2);
}

function draw() {
  background(100);
  /* noStroke(); */

  fill(153, 39, 179);
  for (let i = 0; i < numRandoms.length; i++) {
    rect(
      (windowWidth / 20.18) * i,
      windowHeight / 2,
      windowWidth / 20.18,
      -numRandoms[i]
    );
  }
  stroke(66, 245, 212);
  strokeWeight(4);
  for (let i = 1; i < numRandoms.length; i++) {
    line(
      (windowWidth / 20.18) * i - windowWidth / 40,
      windowHeight / 2 - numRandoms[i - 1],
      (windowWidth / 20.18) * (i + 1) - windowWidth / 40,
      windowHeight / 2 - numRandoms[i]
    );
  }
}
function refresh() {
  location.reload();
}