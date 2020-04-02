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
  let pixelSize = 1;
  for (let i=0;i<w; i = i+pixelSize){
    for (let j=0;j<h; j = j+pixelSize){
      let c = img.get(i,j);
      fill((c[0]+c[1]+c[2])/(3)-j);
      noStroke();
      rect(i,j,1,1);
    }
  }
}
