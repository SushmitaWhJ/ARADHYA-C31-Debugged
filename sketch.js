const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var divisionHeight = 300;
var plinkos = [];

function setup() {
  createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,800,800,20);

    for (var k = 0; k <=400;k = k+80) {
      divisions.push(new Division(k ,height- divisionHeight/2,10,divisionHeight));
      }

    for (var a = 20; a <=width; a=a+50) // varying x value with constant y value
    {
    
       plinkos.push(new Plinko(a,75));   //(x,y)
    }
    //plinko = new Plinko(200,400);
    
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
//plinko.display();
  
 

  // for(var k =0;k<divisions.length;k++)
  // {
  //   divisions[k].display()
  // }

  
  // for (var j = 40; j<=400; j = j + 50){
  //    plinkos.push(new Plinko(j,75));
  //  }

   
 //for (var j = 40; j<=400; j = j + 50){
   // plinkos[j].display()
 //}
  
}
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
   
  //DISPLAY OF PLINKOS
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display(); 
   }

     //DISPLAY OF DIVISIONS
     for (var k = 0; k < divisions.length; k++) {
     
      divisions[k].display();
    }

  }

