var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaf,leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX=0;
}


function draw() {
  background(0);
  

  edges= createEdgeSprites();
  rabbit.collide(edges);


//Moving the rabbit
  if(keyDown("right"))
  {
    rabbit.x = rabbit.x+2;
  }
 
  if(keyDown("left"))
  {
    rabbit.x = rabbit.x-2;
  }
  
//Spawning apples and leaves
  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 === 0)
  {
   if(select_sprites == 1)
   {
    spawnApples();
   }
   else{
    spawnLeaves();
   }
  }
 

  
//if(rabbit.isTouching(apple) ||
//rabbit.isTouching(leaf))
//{
  //apple.velocityX=0;
  //leaf.velocityX=0;
//} 

  drawSprites();
}

function spawnApples()
{

  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.scale=0.05  
  apple.velocityY=2;

}

function spawnLeaves()
{
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImage);
  leaf.scale=0.05  
  leaf.velocityY=2;

}

