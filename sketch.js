const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(390,300,250,10)
    ground1 = new Ground(700,200,200,10)
    box1 = new Block(300,275,30,40);
    box2 = new Block(330,275,30,40);
    box3 = new Block(360,275,30,40);
    box4 = new Block(390,275,30,40);
    box5 = new Block(420,275,30,40);
    box6 = new Block(450,275,30,40);
    box7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);
    
    //set 2 for second stand
    //level one
    Blocks1 = new Block(640,175,30,40);
    Blocks2 = new Block(670,175,30,40);
    Blocks3 = new Block(700,175,30,40);
    Blocks4 = new Block(730,175,30,40);
    Blocks5 = new Block(760,175,30,40);
    //level two
    Blocks6 = new Block(670,135,30,40);
    Blocks7 = new Block(700,135,30,40);
    Blocks8 = new Block(730,135,30,40);
    //top
    Blocks9 = new Block(700,95,30,40);
    polygon = new Poly(100,100);
rope=new Slingshot(polygon.body,{x:100,y:200})
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    ground1.display();

    box3.display();
    box4.display();
    
    box5.display();
    box6.display()
    box7.display()
    polygon.display();
    rope.display()
    block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  Blocks1.display();
  Blocks2.display();
  Blocks3.display();
  Blocks4.display();
  Blocks5.display();
  fill("turquoise");
  Blocks6.display();
  Blocks7.display();
  Blocks8.display();
  fill("pink")
  Blocks9.display();
  fill("gold");
  

  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
    if(keyCode===32){
        rope.attach(polygon.body)
    }
}
