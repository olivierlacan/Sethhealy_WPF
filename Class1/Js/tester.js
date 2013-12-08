/**
 * Created by sethhealy on 12/8/13.
 */
(function(){

    var btn=document.querySelector("#button");
    var name=document.querySelector("#name");
    var address=document.querySelector("#address");
    var gpa=document.querySelector("#gpa");
    var average=document.querySelector("#average");
    var student=[];
    var counter=0;
    var students= [{name:"Jbond",address:"somewhere",gpa:[4,4,4]},
                   {name:'Mmouse',address:"disneyworld",gpa:[3,4,3]}
    ];


    student.push(students);
    population();
    btn.addEventListener("click",onClick);


    function onClick(e){
        addstudents("Sman","ice place",[3,4,3]);
        population();

    }
    function addstudents(n,add,g){
        var obj=[{name:n,address:add,gpa:g}];

        student.push(obj);

    }
    function population(){

        for(var p in student[counter]){
            name.innerHTML= "name: "+ student[counter].name;
            address.innerHTML= "address: "+ student[counter].address;
            gpa.innerHTML= "gpa: "+  student[counter].gpa;
        }

        if(counter==student.length){
            counter=0;
            btn.removeEventListener("click",onClick);
        }

        counter++;
    }
}());





