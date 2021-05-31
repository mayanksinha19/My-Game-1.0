class Form{
    constructor(){
        this.input = createInput("Name");
        this.greeting = createElement('h2');
        this.button = createButton('Play');
        this.button_girl = createButton('girl');
        this.button_boy = createButton('boy');
        this.title = createElement('h2');
    }
    hide(){
        
        this.button.hide();
        this.button_girl.hide();
        this.button_boy.hide();
        this.input.hide();
        //this.input2.hide();
        this.title.hide();
      }
      display(){
        
        this.title.html("MY GAME");
        this.title.position(displayWidth/2 - 50, 0);
        
    
        //this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 160);
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.button_girl.position(displayWidth/2 + 100, displayHeight/2+20);
        this.button_boy.position(displayWidth/2 - 40, displayHeight/2+20);
        //this.reset.position(displayWidth-100,20);
    
        this.button.mousePressed(()=>{
          this.input.hide();
          //this.input2.hide();
          this.button.hide();
          this.button_girl.hide();
          this.button_boy.hide();
          name = this.input.value();
          
          background(2,188,227);
          player.visible=true;
          this.greeting.html("Hello " +name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          player.display();
        });
    
        this.button_boy.mousePressed(()=>{
         // player.updateCount(0);
         // game.update(0);
         player.addImage(boyImage);
         translate(displayWidth/2, displayHeight/2);
        });
        this.button_girl.mousePressed(()=>{
            // player.updateCount(0);
            // game.update(0);
            player.addImage(girlImage);
           });
    
      }
}