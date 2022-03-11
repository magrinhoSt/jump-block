var scP = document.getElementById("scP");
var jg  = document.getElementById("jg");


Input = function() {
  for (var i = 0; i < m1.length; i++) {

    m1[0].addEventListener("dblclick", () => {
      Visible(menu1[0], false);
      boot.initBoot();
    });
    
    m1[1].addEventListener("dblclick", () => {
      Visible(mScore[0], true);
    });
    

    m1[3].addEventListener("dblclick", () => {
      Visible(menu2[0], false);
      boot.initBoot();
    });

    m1[4].addEventListener("dblclick", () => {
      Visible(menu2[0], false);
      Visible(menu1[0], true);
    });
  }



  okScore.addEventListener("touchstart", () => {
    Visible(mScore[0], false);
  });


}



setRecord = function(){
  
   scP.innerText = 
       `1° lugar ${play.record}\n`;          
       "2° lugar"
       /*3° lugar < br / > <br/>
       4° lugar < br / > <br/>
       5° lugar < br / > <br/>
       6° lugar < br / > <br/>
       7° lugar < br / > <br/>
       8° lugar < br / > <br/>
       9° lugar < br / > <br/>
       10° lugar < br / >"*/
}
