









var ctx;
var lar;
var alt;
var play;
var plata;
var boot;
var lsP = [];
var idxP = 0;
var c = ['#2ca8c2', '#98cb4a', '#f76d3c', '#f15f74','#5481e6'];
var bg = new Image();
var backg;

Background = function(){
  this.x = 0;
  this.x2 = lar;
  this.v = .1;
  
  this.update = function(){
    this.x -= this.v;
    
    if(this.x + lar <= 0){
       this.x = this.x2 + lar;
    }
    
    this.x2 -= this.v;
    if(this.x2 + lar < 0){
      this.x2 = this.x + lar;
    }
    
  }
  
  this.draw = function(){
    ctx.drawImage(bg, 
                0,0,
                576,370,
                this.x,0,
                lar, alt);
    ctx.drawImage(bg, 
                0,0,
                576,370,
                this.x2,0,
                lar, alt);
    
  }
}



game = {
  newGame: function(){
    backg = new Background();
    boot = new BootLoad();
    plata = new PLATAMeneger();
    play = new PLAYER();
    
    setRecord();
  },
  
  update: function(){
    backg.update();
    
    play.update();
    play_colid_plataforma();
    
    for(var i = 0; i< lsP.length; i++){
        lsP[i].update();
    }
    
  },
  
  draw: function(){
    backg.draw();
    
    for(var i = 0; i< plata.ls.length; i++){
      plata.ls[i].draw();;
    }
    
    play.draw();
    for(var i = 0; i< lsP.length; i++){
        lsP[i].draw();
    }
    
  },
  
  loop: function(){
    
    if(STATOS.jogando){
      game.update();
      game.draw();
    }
    
    
    boot.up();
    
    
    dBoog();
    
    window.requestAnimationFrame(game.loop);
  },
  
  
  resize: function(){
    lar = window.innerWidth;
    alt = window.innerHeight;
    ctx.canvas.width  = lar;
    ctx.canvas.height = alt;
  },
  
  init: function(){
    ctx = document.querySelector("canvas").getContext("2d");      
    
    
    this.resize();
    this.newGame();
    setRecord();
    this.loop();
    window.addEventListener("resize", game.resize);
    
    document.addEventListener("touchstart", play.jump);
    Input();
    
    
  }
}

window.onload = function(){
  bg.src = "/img/m1.png";
  game.init();
}
