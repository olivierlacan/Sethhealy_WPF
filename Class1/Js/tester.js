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

  displayinfo();
  students.push(student);
  population();
  btn.addEventListener("click",onClick);


  function onClick(e){
    addstudent("Sman","ice place",[3,4,3]);
    population();

  }
  function addstudent(n,adr,g){
    var obj=[{name:n,address:adr,gpa:g}];

    student.push(obj);

  }
  function population(){

    for(var p in students[counter]){
      name.innerHTML= "name: "+ students[counter].name;
      address.innerHTML= "address: "+ students[counter].address;
      gpa.innerHTML= "gpa: "+  students[counter].gpa;
      average.innerHTML="average: "+ students[counter].average;
    }

    if(counter==students.length){
      counter=0;
      btn.removeEventListener("click",onClick);
    }

    counter++;
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
