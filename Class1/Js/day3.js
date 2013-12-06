/**
 * Created by sethhealy on 12/5/13.
 *
 *
 *
 *
 */
//console.log("started");
//
//(function(){
//   var hp = 100;
//   var score = 0;
//
//init();
//    console.log(score);
//
// function init(){
//     //setup assets
//     score +=10;
//     }
//
//})();

//(function(){
//    //var dog=["male","black",bark];
//
//    //object literal
//      var dog={gender:"male",
//               color:"black",
//               bark:function(){
//                   console.log("i am barking");
//               }};
//    console.log(dog);
//})();

//(function(){
//
//    var phone = {
//        color:"black",
//        style:"flip",
//        ring:function(){
//            console.log("ring");
//        }};
//
//    console.log(phone.style);
//
//
//})();
(function(){
    var person={};
    person.name= "Jerry";
    person.address = {street:"960 rolling hills", state:"Fl"};
    person.date = new Date();
    person.grades=[100,92,80];
    person.average=function(){
        var total=0;
        for (var i = 0; i<person.grades.length;i++){
            total+=person.grades[i];
        }
        return total/person.grades.length;
    };
    console.log(person.average());
for(var p in person){
    console.log(p,person[p]);
}



})();
























