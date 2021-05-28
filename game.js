class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            player1 = createSprite(-100,-500);
            player1.addImage("player1",player_img);
            player1.scale=0.6;  
        
            player2 = createSprite(-100,-500);
            player2.addImage("player2", player_img);
            player2.scale=0.6; 
        
                
            
            players=[player1,player2];

        }
    
    play(){
        
      

                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = x + 200;
                     y = 350 - allPlayers[plr].distance;
                   
                     players[index -1].x = x;
                     players[index - 1].y = y;

                                            
                     if(index === player.index){
                         
                         // to display player name on the basket.
                         fill("black");
                         textSize(25);
                         text("(You)"+allPlayers[plr].name ,x-60,y+70);
                          
                         text(allPlayers[plr].name+" : " +allPlayers[plr].score,50,50);
                         
                     }

                     else{
                         fill("black")
                         textSize(25);
                         text(allPlayers[plr].name+" : " + allPlayers[plr].score, 50, 100);
                         text(allPlayers[plr].name ,x-60,y+70);
                     }
                                    
                 }
                
                
                
                 

                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.distance +=10
                    
                    
                    player.update();
                }
                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.distance -= 10
                 
                    
                    player.update();
                }
            
                if (frameCount % 50 === 0) {
                    plastic = createSprite(910, random(45, 400), 100, 100);
                    plastic.velocityX = -(6 + 3*score/100);
                    var rand = Math.round(random(1,6));
                    switch(rand){
                        case 1: plastic.addImage("plastic",oil);
                        break;
                        case 2: plastic.addImage("plastic", fertilizer);
                        break;
                        case 3: plastic.addImage("plastic", rings);
                        break;
                        case 4: plastic.addImage("plastic", bag);
                        break;
                        case 5: plastic.addImage("plastic",bottle);
                        break;
                        case 6: plastic.addImage("plastic", straw);
                        break;
                    }
                    plastic.scale=0.2;
                    plasticGroup.add(plastic);
                  }

                  if (player.index !== null) {
                       for(var i = 0; i < plasticGroup.length; i++){
                       if(plasticGroup.get(i).isTouching(players)){
                       plasticGroup.get(i).destroy();
                       game.end();
                       player.update();
                       gameState=2;

                     
                       
                    }
                    }}
                         
                                    
                   if(keyIsDown(UP_ARROW)&& player.index !== null&&frameCount % 10 === 0){

                    player.score = player.score+1;
                    player.update();
                   }

                   if(keyIsDown(DOWN_ARROW)&& player.index !== null&&frameCount % 10 === 0){

                    player.score = player.score+1;
                    player.update();          
                  
                  }


                  
                    }

    end(){

        player.score=0;
       
      
        background("black");

        player.update();

    plasticGroup.setVelocityXEach(0)
    plasticGroup.setLifetimeEach(-1);
    plasticGroup.removeSprites();
 
  if(mousePressedOver(restart)){
    player.updateCount(0);
    game.update(0);
    database.ref('/').update({players:null});
  }

  textSize(37)
  fill("#FEBA01")
  text("**Reload the page after clicking on the restart button!", 70,520)

}
}

