function setup() {
  createCanvas(800, 800); // fixed square canvas
  noLoop();
}

function draw() {
  background(255);
  noStroke();

  let maxSize = width * 0.6; // largest ellipse size (smaller so it fits)
  let steps = 12; // number of concentric ellipses

  // Main area
  for (let i = 0; i < steps; i++) {
    fill(i % 2 === 0 ? 0 : 255);
    let size = map(i, 0, steps - 1, maxSize, 40);
    ellipse(width / 2, height / 2, size, size * 0.7);
  }

  //Surrounding stars
  let orbitCount = 12;          // how many "stars"
  let orbitRadius = maxSize * 0.75; // distance from center

  for (let i = 0; i < orbitCount; i++) {
    let angle = map(i, 0, orbitCount, 0, TWO_PI);
    let x = width / 2 + cos(angle) * orbitRadius;
    let y = height / 2 + sin(angle) * orbitRadius;

    //colors
    let mainColor = (i % 2 === 0 ? 0 : 255);
    fill(mainColor);

    let baseSize = 25;
    ellipse(x, y, baseSize, baseSize);

    //stars
    let spikeCount = 8;
    let spikeRadius = baseSize * 0.7;

    for (let s = 0; s < spikeCount; s++) {
      let a = (TWO_PI / spikeCount) * s;
      let sx = x + cos(a) * spikeRadius;
      let sy = y + sin(a) * spikeRadius;

      fill(mainColor === 0 ? 255 : 0);
      ellipse(sx, sy, baseSize * 0.3, baseSize * 0.3);
    }
  }
}

