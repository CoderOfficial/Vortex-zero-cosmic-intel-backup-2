const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var PC1AM_image;
var Enemy1_image, Enemy2_image, Enemy3_image, Enemy4_image, Enemy5_image;
var BG1_image;
var PC1bull_image, Enemy1bull_image, Enemy2bull_image, Enemy3bull_image, Enemy4bull_image, Enemy5bull_image;
var EnemyGroup,EnemyBullGroup, Enemy=[];
var PC1bullGroup;
var bg1_image, Marsbg1_image;
var Mars_image,Jupiter_image;
var bulletsound;
var LEVEL = 0;
var level1b_image, level1b2_image;
var levelscrbg1_image;
var score;
var Pclifetime = 3, Elifetime = 3;
var Pchp1,Pchp2,Pchp3;
var Pc1;
var engine, world;
var Ebull;
var EarthDest_image, EarthDest;
var GameState = 1;
var endvalue = 0;
var GameOver_image;
var EnemySpritedata, EnemySpritesheet, EnemyAnimation = [];
function preload(){
PC1AM_image = loadAnimation("Images/PC1-1.PNG","Images/PC1-2.png","Images/PC1-3.PNG");
Enemy1_image = loadAnimation("Images/enemyam1-1.png","Images/enemyam2-1.png","Images/enemyam3-1.png");
Enemy2_image = loadAnimation("Images/enemyam1-2.png","Images/enemyam2-2.png","Images/enemyam3-2.png");
Enemy3_image = loadAnimation("Images/enemyam1-3.png","Images/enemyam2-3.png","Images/enemyam3-3.png");
Enemy4_image = loadAnimation("Images/enemyam1-4.png","Images/enemyam2-4.png","Images/enemyam3-4.png");
Enemy5_image = loadAnimation("Images/enemyam1-5.png","Images/enemyam2-5.png","Images/enemyam3-5.png");
PC1bull_image = loadImage("Images/PC1-Bullet.png");
Enemy1bull_image = loadImage("Images/enemy1-bullet.png");
Enemy2bull_image = loadImage("Images/enemy2-bullet.png");
Enemy3bull_image = loadImage("Images/enemy3-bullet.png");
Enemy4bull_image = loadImage("Images/enemy4-bullet.png");
Enemy5bull_image = loadImage("Images/enemy5-bullet.png");

bg1_image = loadImage("Images/Bg1.png");
Mars_image = loadAnimation("Images/Mars Image 1.png","Images/Mars Image 2.png","Images/Mars Image 3.png","Images/Mars Image 4.png","Images/Mars Image 5.png","Images/Mars Image 6.png")
Jupiter_image = loadAnimation("Images/jupiterim-1.png","Images/jupiterim-2.png","Images/jupiterim-3.png","Images/jupiterim-4.png","Images/jupiterim-5.png","Images/jupiterim-6.png","Images/jupiterim-7.png","Images/jupiterim-8.png","Images/jupiterim-9.png","Images/jupiterim-10.png","Images/jupiterim-11.png","Images/jupiterim-12.png");
Marsbg1_image = loadImage("Images/Marsbg 1.png");
level1b_image = loadImage("Images/level1b.png")
level1b2_image = loadImage("Images/level1b-2.png")
levelscrbg1_image = loadImage("Images/levelscrbg1.png");
Pchp1 = loadImage("Images/Pchp1.png");
Pchp2 = loadImage("Images/Pchp2.png");
Pchp3 = loadImage("Images/Pchp3.png")
EarthDest_image = loadAnimation("Images/Earthdest1.png","Images/Earthdest2.png","Images/Earthdest3.png","Images/Earthdest4.png","Images/Earthdest5.png","Images/Earthdest6.png","Images/Earthdest7.png","Images/Earthdest8.png","Images/Earthdest9.png","Images/Earthdest10.png","Images/Earthdest11.png","Images/Earthdest12.png","Images/Earthdest13.png","Images/Earthdest14.png")
GameOver_image = loadImage("Images/GameOver.png")
EnemySpritedata = loadJSON("Enemy1.json")
EnemySpritesheet = loadImage("Images/PC1-1.PNG")

}
function setup(){
    createCanvas(windowWidth,windowHeight)
    engine = Engine.create();
    world = engine.world;

EnemyGroup = new Group();
Pc1bulletgroup = new Group();
EnemyBullGroup = new Group();

        Pc1 = createSprite(windowWidth/2,windowHeight-60,50,50);
        Pc1.addAnimation("default ship",PC1AM_image);
        Pc1.scale = 0.6;
        Pc1.visible = false;
Pc1.setCollider("rectangle",0,0,320,150)

        
Mars = createSprite(300,300,10,10);
Mars.addAnimation("mars",Mars_image);
Mars.scale = 0.5

Jupiter = createSprite(windowWidth/1.5,windowHeight/3,10)
Jupiter.addAnimation("jupiter",Jupiter_image)
Jupiter.scale = 0.5

Level1 = createSprite(windowWidth/4.9,windowHeight/3.7)
Level1.addImage(level1b_image);
Level1.setCollider("rectangle",0,0,Level1.width,Level1.height);
Level1.scale = 0.1
EarthDest = createSprite(windowWidth/2,windowHeight/2,10,10);
    EarthDest.addAnimation("Earth",EarthDest_image);
EarthDest.visible = false;

PcLifetime = createSprite(windowWidth/1.2,windowHeight/13,10,10);
PcLifetime.addImage(Pchp1);
PcLifetime.scale = 0.2;
PcLifetime.visible = false;

PcLifetime.visible = true;

var EnemyFrames = EnemySpritedata.frames;
for (var i = 0; i < EnemyFrames.length; i++) {
  var pos = EnemyFrames[i].position;
  var img = EnemySpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  EnemyAnimation.push(img);
}

}


function draw(){
background(levelscrbg1_image)

Engine.update(engine);

if(GameState===2){
if(EnemyBullGroup.collide(Pc1)){
    Pclifetime = Pclifetime -1
    EnemyBullGroup.destroyEach();
}
if(Pclifetime===3){
    PcLifetime.addImage(Pchp1);
}
if(Pclifetime===2){
    PcLifetime.addImage(Pchp2);
}
if(Pclifetime===1){
    PcLifetime.addImage(Pchp3)
}
if(Pclifetime===0){
  GameState = 3;
  LEVEL = 0;
}
}


if(GameState===3){
    Pclifetime = 3;
    EnemyGroup.destroyEach();
    Pc1.visible = false;
    Pc1.x = windowWidth/1.2;
    Pc1.y = windowHeight/13
    PcLifetime.visible = false;
    EarthDest.visible = true;
    Mars.remove();
    if(frameCount%30===0){
        endvalue = endvalue+1;
    }
    background(0);
    if(endvalue>1){
        EarthDest.visible = false
background(GameOver_image);
    }

}

if(mousePressedOver(Level1)){
GameState = 2;
LEVEL = 1;
}
Levels();

drawSprites();
}

function showEnemy() {
    if (Enemy.length > 0) {
      if (
        Enemy.length < 4 &&
        Enemy[Enemy.length - 1].body.position.y < height - 300
      ) {
        var positions = [-40, -60, -70, -20];
        var position = random(positions);

        var positionx = [windowWidth*0.2,windowWidth*0.3,windowWidth*0.4,windowWidth*0.5,windowWidth*0.6,windowWidth*0.7,windowWidth*0.8,windowWidth-50];
        var randpositionx = random(positionx);
        var enemy = new Enemy1(
          randpositionx,
          windowHeight,
          170,
          170,
          position,
          Enemy1_image
        );
  
        Enemy.push(enemy);
      }
  
      for (var i = 0; i < enemy.length; i++) {
        Matter.Body.setVelocity(enemy[i].body, {
          x: 0,
          y: 5
        });
  
        Enemy[i].display();
        Enemy[i].animate();
      }
    } else {
      var enemy = new Enemy1(randpositionx, windowHeight, 170, 170, -60, Enemy1_image);
      Enemy.push(enemy);
    }
  }

  function CollisionEnemy(){

  }

function Bullet1pc1(){
        bullet1pc1= createSprite(480, 100, 5, 10);
        bullet1pc1.velocityY = -40;
        bullet1pc1.scale = 0.5;
        bullet1pc1.lifetime = 150;
        bullet1pc1.depth = Pc1.depth-1
        Pc1bulletgroup.add(bullet1pc1);
        bullet1pc1.addImage("main ship bullet1",PC1bull_image);
        bullet1pc1.x = Pc1.x+30
        bullet1pc1.y = Pc1.y
        return bullet1pc1;
}
function Bullet2pc1(){
    bullet2pc1= createSprite(480, 100, 5, 10);
    bullet2pc1.velocityY = -40;
    bullet2pc1.scale = 0.5;
    bullet2pc1.lifetime = 150;
    bullet2pc1.depth = Pc1.depth-1
    Pc1bulletgroup.add(bullet2pc1);
    bullet2pc1.addImage("main ship bullet2",PC1bull_image);
    bullet2pc1.x = Pc1.x-40
    bullet2pc1.y = Pc1.y
    return bullet2pc1;
}
function Levels(){
    if(GameState===2 || LEVEL===1){


        
       /* if(frameCount%60===0){
            var randWidth = Math.round(random(10,width));
            var Enemy = createSprite(randWidth,height-600,30,30);
            Enemy.scale = 0.3;
            Enemy.velocityY = 1;
            Enemy.lifetime = 900;
             Ebull = createSprite(10,10,10,10);
            Ebull.x = Enemy.x;
            Ebull.y = Enemy.y;
            Ebull.scale = 0.5
            Ebull.velocityY=5
            Ebull.lifetime=900
            Ebull.setCollider("rectangle",0,0,40,40)
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1: Enemy.addAnimation("1",Enemy1_image);
                Ebull.addImage(Enemy1bull_image);
                break;
                case 2: Enemy.addAnimation("2",Enemy2_image);
                Ebull.addImage(Enemy2bull_image);
            
                break;
                case 3: Enemy.addAnimation("3",Enemy3_image);
                Ebull.addImage(Enemy3bull_image);
            
                break;
                case 4: Enemy.addAnimation("4",Enemy4_image);
                Ebull.addImage(Enemy5bull_image);
            
                break;
                case 5: Enemy.addAnimation("5",Enemy5_image);
                Ebull.addImage(Enemy4bull_image);
            
                break;``
                default:break;
            }
           // if(Ebull.collide(Pc1)){
           // }
            if(Pc1bulletgroup.isTouching(EnemyGroup)){
                score = score + 1;
                Enemy.destroy();
            }
            
            EnemyGroup.add(Enemy)
            EnemyBullGroup.add(Ebull);

            }*/
            
        background(Marsbg1_image);
       Pc1.visible = true;

        Mars.x = windowWidth/7;
        Mars.y = windowHeight/4
        Jupiter.remove();
        Level1.remove();
        if(keyDown("d")){
            Pc1.velocityX = 20;
        }
        if(keyDown("a")){
            Pc1.velocityX = -20;
        }
        if(keyDown("s")){
            Pc1.velocityY = 20;
        }
        if(keyDown("w")){
            Pc1.velocityY = -20;
        }
        if(keyWentUp("w")){
            Pc1.velocityY = 0;
        }
        if(keyWentUp("a")){
            Pc1.velocityX = 0;
        }
        if(keyWentUp("s")){
            Pc1.velocityY = 0;
        }
        if(keyWentUp("d")){
            Pc1.velocityX = 0;
        }
        
        if (keyDown("space")) {
            Bullet1pc1();
            Bullet2pc1();
           }
           
 

                }
}

