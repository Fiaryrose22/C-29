const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  g=new ground(200,690,600,20)
  var fruitoptions={
    density:0.001
  }
  fruit=Bodies.circle(300,300,15,fruitoptions)  
  rope1=new Rope(9,{x:245,y:30})
  Matter.Composite.add(rope1.body,fruit)
  fruitcon=new Link(rope1,fruit)
  

  rectMode(CENTER);  
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  g.display()   
  rope1.show()
  ellipse(fruit.position.x,fruit.position.y,15,15)
}




