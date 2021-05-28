var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var player_img;
var score=0;
var plastic, plasticGroup;
var bag,bottle,fertilizer,oil,rings,straw;
var play=1;
var end=2;
var gameOver, gameOverImg;
var invisiblePlat, invisiblePlat2;
var restart, restartImg;
var up, upImg;
var down, dowmImg;


function preload(){
  back_img = loadImage("images/background.jpg");
  player_img = loadImage("images/turtle.png");

  bag=loadImage("images/bag.png")
  bottle=loadImage("images/bottle.png")
  fertilizer=loadImage("images/fertilizer.png")
  oil=loadImage("images/oil.png")
  rings=loadImage("images/rings.png")
  straw=loadImage("images/straw.png")

  gameOverImg=loadImage("images/gameOver.jpg")
  restartImg=loadImage("images/reset.png")
 
}
function setup() {
  createCanvas(1000, 590);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  plasticGroup = new Group();

  
  gameOver=createSprite(500,200,10,50)
  gameOver.addImage("gameover",gameOverImg)
  gameOver.scale=0.7;
  
  restart=createSprite(500,420,10,50)
  restart.addImage("gameover",restartImg)
  restart.scale=0.7;
  
  gameOver.visible=false;
 restart.visible=false;
 
}
function draw() {
  background(back_img);
  
if(gameState==0){
  gameOver.visible=false;
  restart.visible=false;
}

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear();   
     game.play();
     player1.visible=true;
    player2.visible=true;

    gameOver.visible=false;
    restart.visible=false;
   }
   if (gameState === 2 ) {
    game.end();

    //restart.visible=false;      

    player1.visible=false;
    player2.visible=false;

    gameOver.visible=true;
    restart.visible=true;

 } 

 drawSprites();
}