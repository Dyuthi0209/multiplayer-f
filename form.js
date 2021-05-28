class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting2 = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.greeting2.hide();
        this.button.hide();
        this.input.hide();
        
    }

    

    display() {
        this.title.html("SAVE THE TURTLES");
        this.title.position(330, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', "#ffd6d6");
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background',"#8ef1f5");
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background',"#8ef1f5");
        this.reset.position(900, 550);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', "#8ef1f5");


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name + "!")
            this.greeting.position(200,50);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '90px');

            
            this.greeting2.html("Please wait for the other player to join. Also try refreshing the page.")
            this.greeting2.position(200,300);
            this.greeting2.style('color', 'white');
            this.greeting2.style('font-size', '45px');
           
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({players:null});



        });

    if(gameState===2){
        this.reset.hide();
    }

     
       

    }
}