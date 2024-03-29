const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,400,50,50);
    box2 = new Box(800,400,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(700,400,50,50)
    log1 = new Log(700,350,300,PI/2)
    box3 = new Box(600,300,50,50)
    box4 = new Box(800,300,50,50)
    pig2 = new Pig(700,300,50,50)
    log2 = new Log(700,250,300,PI/2)
    box5 = new Box(700,150,50,50)
    log3 = new Log(690,100,150,PI/4)
    log4 = new Log(710,50,150,-PI/4)
    bird1 = new Bird(500,400)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}