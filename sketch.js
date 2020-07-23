const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bgImage;
var batmanImg, umbrellaImg, thunderImg;
var drops = [];
var maxDrop=100;

function preload(){
    bgImage = loadImage("sprites/background.jpg");
    thunderImg = loadImage("sprites/Thunder.png");
    batmanImg = loadImage("sprites/Batman.png");
    //umbrellaImg = loadImage("sprites/Umbrella.png");
}

function setup(){
  var canvas = createCanvas(1200,900);
  engine = Engine.create();
  world = engine.world;

  //drop = new Drop(300,0,6);

  umbrella = new Umbrella(400,320,300,300);
  
  for(var i=0; i<maxDrop; i++){
    drops.push(new Drop(random(0,1200), random(0,900), 6))
}
  
}

function draw(){
    background(bgImage);
    Engine.update(engine); 

    if(frameCount%12===0){
      thunder= image(thunderImg,random(0,900),-100)
    }

    batman = image(batmanImg,200,320);
    //umbrella = image(umbrellaImg,-40,-90);
    umbrella.display();
    //drop.display();
    for(var i=0; i<drops.length; i++){
        drops[i].display();
        
    }
}   

