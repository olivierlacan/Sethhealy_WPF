/**
 * Created by sethhealy on 12/7/13.
 */
(function(){
   //console.log("getting started");
   var students=[{name:"Ryan",age:21,grades:[80,90,100]},
                 {name:'Manton',age:19,grades:[85,80,100]}
                ];
displayinfo();
    addstudent("billy",32,[90,90,88]);
    console.log("newstudent added");
    displayinfo();

//console.log(students[0].name);////drilling just into the student in the first position's name
//
//console.log(students[1].grades[1]);// drilling into the second students grades in the second position
//
//console.log(students[0].grades[2]);// drilling into the first students grades in the third position


addstudent("billy",32,[90,90,88]);
    function addstudent(n,a,g){
        students.push({name:n,age:a,grades:g})
    }
function displayinfo(){
    for(i=0; i<students.length;i++)
    {
        for(var p in students[i]){
            console.log(p+":"+students[i][p]);
        }

        console.log('---------------------');

}
}
})();                                 /// # means id

//(function(){
//
//    var vgames=[{name:"skyrim",genre:"rpg",rating:"m"},
//                {name:"madden",genre:"sports",rating:"e"}];
//    var students=[{name:"eric",age:"22"},{name:"Seth",age:"21"}];
//
////    display(students);
////    display(vgames);
//    //var btn=document.getElementById("button");
//    var counter=0;
//    var output=document.querySelector("#output");
//    var output2=document.querySelector("#output2");
//    var output3=document.querySelector("#output3");
//    output.innerHTML=vgames[0].name;
//
//      var btn=document.querySelector("#button");
//    //console.log(btn);
//    btn.addEventListener("click",onClick);
//    function onClick(e){
//        console.log("Click",e);
//        output.innerHTML=vgames[counter].name;
//        counter++;
//if(counter==vgames.length){
//
//    counter=0;
//    btn.removeEventListener("Click",onClick);
//}
//}
//}());
//













































