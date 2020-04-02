let img;

function preload(){
  img = loadImage('brostroem.jpg');
}

function setup(){
    
 
  w = 600;
  h = 338;
  createCanvas(w,h);
}

function draw(){
pixelate();
image(img,w,0);
  noLoop();
}

function pixelate(){
  for (let i=0;i<w; i +=1){
    for (let j=0;j<h; j +=1){
      let c = img.get(i,j);
      fill(c[1],c[2],c[3]);
      noStroke();
      rect(i,j,1,1);
    }
  }
}