/**
 * Created by sethhealy on 12/7/13.
 */




(function(){

    var btn=document.querySelector("#button");
    var name=document.querySelector("#name");
    var address=document.querySelector("#address");
    var state=document.querySelector("#state");
    var people=[];
    var counter=0;
    var person= {name:"dude",age:25,address:{street:"whereever",state:"fl"}};
people.push(person);
population();
    btn.addEventListener("click",onClick);


    function onClick(e){
addperson("Eric",28,{street:"whatever",state:"fl"});
        population();
//        name.innerHTML=people[1].name;
//        address.innerHTML=people[1].address.street;
//        state.innerHTML=people[1].address.state;
//    //name.innerHTML=person.name;
  }
function addperson(n,a,add){
    var obj={name:n,age:a,address:add};
//    obj.name=n;
//    obj.age=a;
//    obj.address=add;
    people.push(obj);

}
    function population(){

        for(var p in people[counter]){
            name.innerHTML= "name: "+ people[counter].name;
            address.innerHTML= "address: "+ people[counter].address.street;
            state.innerHTML= "state: "+  people[counter].address.state;
        }



if(counter==people.length){
    counter=0;
    //btn.removeEventListener("click",onClick);
}
        counter++;
    }




}());