
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let earth ;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  earth=engine.earth;


  var ball_options={
    restitution:0.95,
    frictionAir:0.01
  }

  ball = Bodies.circle(100,10,20,ball_options)
  World.add(earth,ball)
  console.log(ball)


  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,ground_options)
  World.add(earth,ground)

  /*var rock_options={
    restitution:0.85
  }

  rock = Bodies.circle(200,10,20,rock_options)
  World.add(world,rock)

  var wall_options={
    isStatic:true
  }

  wall=Bodies.rectangle(270,200,200,20,wall_options)
  World.add(world,wall)


/*  var ops={
    isStatic:true
  }

  wedge=Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge)*/
}

function draw() 
{
  background(51);
  Engine.update(engine)


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
 // ellipse(rock.position.x,rock.position.y,20)


  fill("brown")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  //rect(wall.position.x,wall.position.y,200,20)
 

  //Body.rotate(wedge,angle)
 // rect(0,0,100,20)
}

