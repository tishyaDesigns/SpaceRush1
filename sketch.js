// Declare variables here
var input
var button
var spaceImg,space
var hr,sc,mn;
var gameState=0
var edges;
var title,alienship1,alienship1Img
var barrier,bullet,spaceShuttle,spaceShuttleImg;
var bullet_enemy;
function preload(){
   spaceImg=loadImage("space.jpg") 
   alienship1Img=loadImage("Alien Spaceship 1.png")
   spaceShuttleImg=loadImage("spavceshuttle.png")

}
function setup(){
    background('red')
    createCanvas(1200,700);
    space=createSprite(200,200)
            space.addImage(spaceImg)
            space.scale=8
            space.velocityY=-2
            
 
    button=createButton("Play Space Rush 2 D")
  button.style('background','black')
  button.style('color','red')
  button.style('height','20%')
  button.style('fontSize','x-large')
    button.position(175,200)

    spaceShuttle=createSprite(190,460)
    spaceShuttle.addImage(spaceShuttleImg)
    spaceShuttle.scale=0.4;
    spaceShuttle.visible = false;

    edges = createEdgeSprites();

}

function draw (){
    background("white");
    button.mousePressed(function(){
        gameState =1;
    })
    
    if(gameState===1){
        button.hide();
        spaceShuttle.visible = true;
        spaceship1();
     
    }
    
    if(space.y<0){
        space.y=300
       }


    
    drawSprites();

    text(mouseX+","+mouseY,mouseX,mouseY)
    
}


function spaceship1(){
    
        if(frameCount %200 === 0){
        alienship1=createSprite(random(spaceShuttle.x,1000),random(20,spaceShuttle.y -200));
        alienship1.addImage(alienship1Img)
        alienship1.depth=space.depth+1
        alienship1.scale=0.2
        bullet_enemy=createSprite(alienship1.x,alienship1.y,10,10);
        bullet_enemy.velocityX = -10;
        bullet_enemy.velocityY = 10;
     
    }
}
function keyPressed(){
    if(keyCode===32){
        bullet=createSprite(spaceShuttle.x,spaceShuttle.y-30,20,20)
        bullet.velocityY= -10
    }
    if(keyCode===LEFT_ARROW){
        spaceShuttle.x = spaceShuttle.x - 15;
    }
    if(keyCode===RIGHT_ARROW){
        spaceShuttle.x = spaceShuttle.x + 15;
    }
    if(keyCode===DOWN_ARROW){
        spaceShuttle.y = spaceShuttle.y + 15;
    }
    if(keyCode===UP_ARROW){
        spaceShuttle.y = spaceShuttle.y - 15;
    }
}
