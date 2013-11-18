/**
 * Created by sethhealy on 11/15/13.
 */

    /// Im making a discount calculator letting the user type the price and how much they want a discount from the 3 choices
/// and if they pick one that isnt there it will prompt invalid selection
var price= parseInt(prompt('How much is the product?'));
var discount = parseInt(prompt('How much of a discount do you have 10%,15% or 20%?'));
var percentages=0;

if (discount!='10' || discount!='15' || discount!='20'){console.log('invalid selection')}
if(discount=='10'){
    percentages=.1;
}else if(discount=='15'){
    percentages=.15;
}else if(discount=='20'){
    percentages=.2;
}

var remainder=price-(price*percentages);

console.log('You pay');
console.log(remainder);
