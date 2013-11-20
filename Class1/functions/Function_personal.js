/**
 * Created by sethhealy on 11/20/13.
 */

/// My function im making is grade calculator. It will tell a user with there three classes what there average grade is.

var a=parseInt(prompt('What percent you get in math class?'));
var b=parseInt(prompt('What percent get in science class?'));
var c=parseInt(prompt('What percent get in english?'));


function grades(a,b,c)
{

    var over=(a+b+c)/3;

    return over;

}
var over= grades(a,b,c);

console.log(over);


if(over >= 60){

    console.log('You passed!!!!');
}

else{
    console.log('You have failed :(');
}
