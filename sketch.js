const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber;
var iron;
var stone;
var edges;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(1000,100,20);
    iron = new Iron(10,200);
    stone = new Stone(80,4000);


}

function draw(){
    background("lightBlue");
    //edges = createedgeSprites;
    Engine.update(engine);



    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
}