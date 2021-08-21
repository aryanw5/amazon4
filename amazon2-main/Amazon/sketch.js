
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fridge_img, mobile_img, laptop_img, watch_img, camera_img;
var fridge, mobile, laptop, watch, camera;
var fridge1, mobile1, laptop1, watch1, camera1;
var fridgeInf, mobileInf, laptopInf, watchInf, cameraInf;
var bg, bg2, order, spr, amzlogo_img, amzlogo;

var gameState = 0;
function preload()
{
	fridge_img = loadImage("fridge.png");
	mobile_img = loadImage("mobile.png");
	laptop_img = loadImage("laptop.png");
	watch_img = loadImage("watch.png");
	camera_img = loadImage("camera.png");
	fridgeInf_img = loadImage("fridge1.png");
	mobileInf_img = loadImage("mobile1.png");
	laptopInf_img = loadImage("laptop1.png");
	watchInf_img = loadImage("watch1.png");
	cameraInf_img = loadImage("camera1.png")
	bg = loadImage("bg.png");
	bg2 = loadImage("bg2.png");
	order = loadImage("unnamed.jpeg");
	amzlogo_img = loadImage("Amazon-logo.jpeg");
	
}

function setup() {
	createCanvas(1300, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Button = new button();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  amzlogo = createSprite(630,60);
  amzlogo.addImage(amzlogo_img);
  amzlogo.scale = 1.3

  

  console.log(gameState)

  
Button.display();

  
  
  drawSprites();
 
}






