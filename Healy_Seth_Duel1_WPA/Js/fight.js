/**
 * Created by sethhealy on 11/26/13.
 */
/*
Seth Healy
Date:11/26/13
Assignment; Goal1: Assignment: Duel1
 */

(function(){

    console.log("FIGHT!!!!!");

    var playeronename="Spiderman";
    var playertwoname="Batman";
    var player1damage=20;
    var player2damage=20;
    var playeronehealth=100;
    var playertwohealth=100;
    var round=0;

    function fight(){
        alert(playeronename+":"+playeronehealth+" *START* "+playertwoname+":"+playertwohealth);
     for(var i=0; i<10;i++){
       var mindamage1= player1damage*.5;
       var mindamage2=player2damage*.5;
       var f1=Math.floor(Math.random()*(player1damage-mindamage1)+mindamage1);
       var f2=Math.floor(Math.random()*(player2damage-mindamage2)+mindamage2);
         playeronehealth-=f1;
         playertwohealth-=f2;
         console.log(playeronename+":"+playeronehealth+""+playertwoname+":"+playertwohealth);
var results = winnercheck();
console.log(results);
     if(results==="No Winner"){
         round++;
         alert(playeronename+":"+playeronehealth+" *ROUND* "+round+"OVER*"+playertwoname+":"+playertwohealth);
     }else{
         break; }
     }
    }
    function winnercheck(){

       if(playeronehealth<1&&playertwohealth<1){
         result="You Both Die";
           } else if(playeronehealth<1){
           result=playertwoname+" WINS!!!!"
       } else if(playertwohealth<1){
           result= playeronename+" WINS!!!!"
       }else{
           result="No Winner";
       }

        return result;

    }
    fight();


})();




































































