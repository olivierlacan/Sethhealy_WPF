/**
 * Created by sethhealy on 12/7/13.
 */
(function(){

    var btn=document.querySelector("#button");
    var name=document.querySelector("#name");
    var address=document.querySelector("#address");
    var gpa=document.querySelector("#gpa");
    var average=document.querySelector("#average");
    var student=[];
    var counter=0;
    var students= [{name:"Jbond",address:"somewhere",gpa:[4,4,4]}
                   ];


    btn.addEventListener("click",onClick);
    function onClick(e){

        }

displayinfo();
    addstudent("Sman","ice",[4,4,4]);
    console.log("newstudent added");
    displayinfo();

    function addstudent(n,add,g){
        students.push({name:n,address:add,gpa:g})
    }

    function displayinfo(){
        for(i=0; i<students.length;i++)
        {
            for(var p in students[i]){
                console.log(p+":"+students[i][p]);
            }

            console.log('---------------------');

}}
}());





