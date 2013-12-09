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

  // population() above is removing event listeners that you hadn't even added yet
  // that's not necessarily a bad thing, but what's the point?
  btn.addEventListener("click", onClick);

  function onClick(e){
    addstudent("Sman", "ice place", [3,4,3]);
    // let's look at the students array after you do this
    console.log(students)
    // => [Object, Object, [[ Object]]]
    // THAT's your problem right here.
    // your addstudent() doesn't work as you seem to expect
    // 1. it uses the student variable which is already an empty array
    // 2. it pushes the `obj` variable which contains ANOTHER array inside the `student`
    //    variable, creating a nested array (or multi-dimensional array), so you end up with:
    //    [ object, object, [ [object] ] ]
    //    when what you want is:
    //    [ object, object, object]
    // 3. the population() function bellow attempts to do its job but it assumes every 
    //    single value in the `students` array is an object, not an array
    population();
  }

  // FIXME: make sure you follow camelCasing conventions in JavaScript naming
  // this should be called `addStudent`.
  // FIXME: name your arguments properly, abbreviations and shortcuts are 
  // error-inducing because it's hard to tell what they represent
  function addstudent(n, adr, g){
    // FIXME: the variable below is named `obj` when it's not an object!
    // FIXME: `obj` is not a word, name your variables explicitely, it will save you 
    // years of your life as a developer. Poor naming and grammar causes more bugs 
    // than anything else.
    var obj = [{ name: n, address: adr, gpa: g }];
    // FIX: var newStudent = { name: n, address: adr, gpa: g }
    // which is an object, not an array
    // when you push an array inside of another array, the two are not merged
    // in a flat way, the pushed array is just added as the last value in the 
    // receiving array.
    // There are ways to flatten nested (or multi-dimensional) arrays but you 
    // should probably avoid using them in the first place unless you have a REALLY 
    // good reason.

    // FIXME: here lies your mistake
    student.push(obj);
    // avoid naming variables in a similar way like the plague — `student` and `students` 
    // is like asking for trouble — this should be:
    // FIX: students.push()
  }

  function population(){
    for(var p in students[counter]){
      name.innerHTML = "name: " + students[counter].name;
      address.innerHTML = "address: " + students[counter].address;
      gpa.innerHTML = "gpa: " + students[counter].gpa;
      average.innerHTML = "average: " + students[counter].average;
    }

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
