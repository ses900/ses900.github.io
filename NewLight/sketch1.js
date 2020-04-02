let img;
function preload(){
img = loadImage('brostroem.jpg');
}
function setup(){
createCanvas(600,338);
}
function draw(){
sortHvid();
// blur();
}
function sortHvid(){
image(img,0,0);
for (let i=mouseX-20;i<mouseX+50; i += 1){
for (let j=mouseY-20;j<mouseY+50; j += 1){
let c = img.get(i,j);
fill((c[0]+c[1]+c[2])/(3));
noStroke();
rect(i,j,1,1);
}
}
}
function blur(){
image(img,0,0);
for (let i=mouseX-20;i<mouseX+20; i += 1){
for (let j=mouseY-20;j<mouseY+20; j += 1){
let cm = img.get(i,j);
let ct = img.get(i,j-1);
let cb = img.get(i,j+1);
let cv = img.get(i-1,j);
let ch = img.get(i+1,j);
let c0 = (cm[0]+ct[0]+cb[0]+cv[0]+ch[0])/5;
let c1 = (cm[1]+ct[1]+cb[1]+cv[1]+ch[1])/5;
let c2 = (cm[2]+ct[2]+cb[2]+cv[2]+ch[2])/5;
fill(c0,c1,c2);
noStroke();
rect(i,j,1,1);
}
}
}