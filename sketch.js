var starImg,bgImg;
var star, starBody;
var fada,imgFada;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

}

function setup() {
    createCanvas(800, 750);
   
   

    fada = createSprite(400,325);
    fada.addAnimation("fada",imgFada);
    fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);

star.x = starBody.position.x;
star.y = starBody.position.y;

if(keyDown(LEFT_ARROW)){
fada.x = fada.x + -5;
}

if(keyDown(RIGHT_ARROW)){
    fada.x = fada.x + 5;
}


if(star.y > 290 && starBody.position.y > 290){
    Matter.Body.setStatic(starBody,true);
}



    drawSprites();
}