var STATOS = {
    jogar: true,
    jogando: false,
    gameOver: false,
    
    JOGAR: function(){
      this.jogar    = true;
      this.jogando  = false;
      this.gameOver =  false;
    },
    
    JOGANDO: function() {
      this.jogar    = false;
      this.jogando  = true;
      this.gameOver = false;
    },
    
    GAMEOVER: function() {
      this.jogar    = false;
      this.jogando  = false;
      this.gameOver = true;
    }
    ,
    
    depura: function(){
      ctx.font = "15px bold";
      ctx.fillStyle = "#fff";
      ctx.fillText(`jogar: ${STATOS.jogar} \n jogando: ${STATOS.jogando} \n gameOver: ${STATOS.gameOver}`, 50,50);
    }
    
}
