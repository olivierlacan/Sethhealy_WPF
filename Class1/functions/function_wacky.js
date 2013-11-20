/**
 * Created by sethhealy on 11/20/13.
 */

function random(type){

    colors= Math.random();


    type=colors <=.2 ? 'Blue' : type = colors <=.4 ? 'Green' : type = colors <=.6 ? 'Orange' : type = colors <=.8 ? 'Purple' : 'Yellow';

    return type;

}
var type= random(type);

console.log('Random color is '+type);