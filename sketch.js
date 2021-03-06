const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3,pig2,pig4;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   // box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    pig1 = new Pig(890, 320);
   // log1 = new Log(1000,260,150, PI);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    pig3 = new Pig(700, 320);
    pig2 = new Pig(700, 290);
    pig4 = new Pig(400, 320);
   // log3 =  new Log(710,180,150, PI);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(520,220,150, PI);
    //log5 = new Log(370,220,150,PI);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Pontuação  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    //box1.display();
   // box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    //log1.display();

   // box3.display();
   // box4.display();
   pig3.display();
   pig3.score();


   pig2.display();
   pig2.score();

   pig4.display();
   pig4.score();
   // log3.display();

    //box5.display();
   // log4.display();
    //log5.display();

    

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}