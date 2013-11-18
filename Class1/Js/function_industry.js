/**
 * Created by sethhealy on 11/18/13.
 */

var a=parseInt(prompt('What is the value for a?'));
var b=parseInt(prompt('What is the value for b?'));

function pythagorean(a,b){

    var c = (a*a)+(b*b);
    var final = Math.sqrt(c);
    return final;
}
