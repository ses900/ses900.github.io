let img;

function preload() {
  img = loadImage('brostroem.jpg');
}

function setup() {
  w = 600;
  h = 338;
  createCanvas(w, h);
}

function draw() {
  pixelate();
  image(img, w, 0);
  noLoop();
}

function pixelate() {
  for (let i = 0; i < w; i = i+1) {
    for (let j = 0; j < h; j = j+1){
      let c = img.get(i, j);
      for (let k=0;k<3;k+=4){
        if (c[k]>127){
          c[k]=255;
        }
        else{
          c[k]=0;
        }
      }
      fill(c[0],c[1],c[2]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
