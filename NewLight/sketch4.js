let img;
let cMinus = [0, 0, 0];

function preload() {
  img = loadImage('brostroem.jpg');
}

function setup() {
  w = 600+300;
  h = 338+300;
  createCanvas(w, h);
}

function draw() {
  pixelate();
  image(img, w, 0);
  noLoop();
}

function pixelate() {
  let pixelSize = 1.2;
  for (let i = 0; i < w; i = i + pixelSize) {
    for (let j = 0; j < h; j = j + pixelSize) {
      let c = img.get(i, j);
      fill((c[0]+100 + c[1] + c[2]) - (cMinus[0] + cMinus[1] + cMinus[2]));
      noStroke();
      rect(i, j, 1, 1);
      cMinus = c;
    }
  }
}