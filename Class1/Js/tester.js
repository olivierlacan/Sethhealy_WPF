/**
 * Created by sethhealy on 12/8/13.
 */
 (function(){
  var btn = document.querySelector("#button");
  var name = document.querySelector("#name");
  var address = document.querySelector("#address");
  var gpa = document.querySelector("#gpa");
  var average = document.querySelector("#average");
  var student = [];
  var counter = 0;
  var students = [
    { name: "Jbond", address: "somewhere", gpa:[4, 4, 4] },
    { name: "Mmouse", address: "disneyworld", gpa:[3, 4, 3] }
  ];
  console.log(students)

  displayinfo();

  students.push(student); // the student variable is equal to [] here
  // therefore you're pushing nothing inside the students array
  console.log(students)
  // output: [Object, Object, Array[0]]
  // since you pushed an empty array at the end of the students array
  // the population() function will attempt to print:
  //name: undefined
  //address: undefined
  //gpa: undefined
  //average: undefined
  //
  // that's because your for(var p in students[counter]){}) loop 
  // will try to print values expecting an object that represents a student 
  // (with `name`, `address` and `gpa` properties) when instead you're passing: `[]`

  // FIXME: this is a poor name for an action: avoid using nounds when verbs 
  // would be more appropriate. populate() would be better for instance.
  population();

  btn.addEventListener("click", onClick);

  function onClick(e){
    addstudent("Sman", "ice place", [3,4,3]);
    population();
  }

  // FIXME: make sure you follow camelCasing conventions in JavaScript naming
  // this should be called `addStudent`.
  // FIXME: name your arguments properly, abbreviations and shortcuts are 
  // error-inducing because it's hard to tell what they represent
  function addstudent(n, adr, g){
    var obj = [{ name: n, address: adr, gpa: g }];
    student.push(obj);
  }

  function population(){
    for(var p in students[counter]){
      name.innerHTML = "name: " + students[counter].name;
      address.innerHTML = "address: " + students[counter].address;
      gpa.innerHTML = "gpa: " + students[counter].gpa;
      average.innerHTML = "average: " + students[counter].average;
    }

    // 
    if(counter == students.length){
      counter = 0;
      btn.removeEventListener("click", onClick);
    }

    counter++;
  }

  function displayinfo(){
    for(i = 0; i < students.length; i++)
    {
      for(var p in students[i]){
        console.log(p + ":" + students[i][p]);
      }

      console.log("---------------------");
    }}
  }());
