/**
 * Created by sethhealy on 11/15/13.
 */
var price= parseInt(prompt('How much is the product?'));
var discount = parseInt(prompt('How much of a discount do you have 10%,15% or 20%?'));
var percentages=0;

if (discount==null);
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

