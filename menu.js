

var menu_im;
var levelsb1im,levelsb2im, levelsb;
var PressSpace_image;
var Levels = 1;
function preload(){
menu_im = loadAnimation("Images/main menu am0.5 part 1.png","Images/main menu am1 part 1.png","Images/main menu am2 part 1.png","Images/main menu am3 part 1.png","Images/main menu am4 part 1.png")
levelsb1im = loadImage("Images/Levels Button Image-1.png");
levelsb2im = loadImage("Images/Levels Button Image-2.png");
PressSpace_image = loadAnimation("Images/Pressspace1.png","Images/Pressspace2.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight+100)

mainmenu = createSprite(windowWidth/2,windowHeight/2);
mainmenu.addAnimation("main menu",menu_im)
mainmenu.scale = 1.2;

SpaceButton = createSprite(windowWidth/1.8,windowHeight/1.1);
SpaceButton.addAnimation("amfor space button", PressSpace_image);
SpaceButton.scale=0.5;


localStorage.setItem("Levels", Levels);
Levels = localStorage.getItem("Levels",Levels);
/*Levelsb = createSprite(windowWidth/1.890,windowHeight/1.150,100,100);
Levelsb.addAnimation("Levels button",levelsb1im);
Levelsb.scale =0.2;*/
}
function draw(){
background(0)
textSize(20);
fill("white");
text("Levels : "+ Levels,windowWidth/1.890,windowHeight/1.150);


/*if(mousePressedOver(levelsb)){
    window.location = "levelscreen.html";
    console.log("I'm in Levelscreen");
    }*/
camera.x = windowWidth/2;
camera.y = windowHeight/1.7;
    if(keyDown("space")){
    window.location = "levelscreen.html";
    console.log("I'm in Levelscreen"); 
    }

drawSprites();
}
