var mar;
var barco;


function preload(){
 mar = loadImage(sea.png);
 barco = loadImage(ship-1.png,ship-2.png,ship-3.png,ship-4.png,);

}

function setup(){
  createCanvas(400,400);
  barco = createSprite(400,400,20,20);
  mar = createSprite(400,400,20,20);

  mar.addImg(sea.png);



}

function draw() {
  background("blue");
    if(mar.x < 0){
    mar.x mar.width/2;
    }
  
  
  
  drawSprites();

 
}
