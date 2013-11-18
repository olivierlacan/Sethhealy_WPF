/**
 * Created by sethhealy on 11/11/13.
 */
//Personal expressions im making a balance checker so that i can know if my account is below a certain number. and if
//it is above 100 means i can go on a date this month.

var balance=parseInt(prompt('How much is in your account now?'));
var bills=parseInt(prompt('How much did you pay in bills this month?'));
var left=balance-bills;
console.log('You have ' + left + ' after bills');

if(left >=100){
    console.log('You have enough for a date!!!!')
}
if( left < 100){
    console.log('Not enough this month maybe next month :( ');

}

else (left<0);

console.log('Maybe you should consider getting a job')



