/**
 * Created by sethhealy on 11/1/13.
 */

//var arrayplayerone = [];
//arrayplayerone[0]=[];
//arrayplayerone[1]=[];
//arrayplayerone[2]=[];

//arrayplayerone[0][0]='dog';
//arrayplayerone[1][1]='cat';
//arrayplayerone[2][2]='bird';

//arrayplayerone[1][0]=1;
//arrayplayerone[1][1]=10;
//arrayplayerone[1][2]=90993;

//arrayplayerone[2][0]=['dog','monkey'];
//arrayplayerone[2][1]=['cat','dolphin'];
//arrayplayerone[2][2]=['bird','whale'];

//console.log(arrayplayerone[0][0]);
//console.log(arrayplayerone[2][0]);
//console.log(arrayplayerone[2][0][0]);

//;
//var pro=parseInt(prompt('give me an integer'));
//var x=parseInt(prompt('give me a number'));
//var arraymulti =[];
//
//arraymulti[0]=[];
//arraymulti[1]=[];
//arraymulti[2]=[];
//arraymulti[3]=[];
//
//arraymulti[0][0]=x;
//arraymulti[0][1]=2;
//arraymulti[0][2]=3;
//arraymulti[0][3]=4;
//
//arraymulti[1][0]=2;
//arraymulti[2][0]=3;
//arraymulti[3][0]=4;
//
//
//arraymulti[1][1]=arraymulti[0][1]*arraymulti[1][0]*pro;
//arraymulti[1][2]=arraymulti[0][2]*arraymulti[1][0]*pro;
//arraymulti[1][3]=arraymulti[0][3]*arraymulti[1][0]*pro;
//
//arraymulti[2][1]=arraymulti[0][1]*arraymulti[2][0]*pro;
//arraymulti[2][2]=arraymulti[0][2]*arraymulti[2][0]*pro;
//arraymulti[2][3]=arraymulti[0][3]*arraymulti[2][0]*pro;
//
//arraymulti[3][1]=arraymulti[0][1]*arraymulti[3][0]*pro;
//arraymulti[3][2]=arraymulti[0][2]*arraymulti[3][0]*pro;
//arraymulti[3][3]=arraymulti[0][3]*arraymulti[3][0]*pro;
//
//arraymulti[0][0]= arraymulti[0][0]*pro;
//arraymulti[0][1]= arraymulti[0][1]*pro;
//arraymulti[0][2]= arraymulti[0][2]*pro;
//arraymulti[0][3]= arraymulti[0][3]*pro;
//arraymulti[1][0]= arraymulti[1][0]*pro;
//arraymulti[2][0]= arraymulti[2][0]*pro;
//arraymulti[3][0]= arraymulti[3][0]*pro;
//
//
//console.log(arraymulti[0]);
//console.log(arraymulti[1]);
//console.log(arraymulti[2]);
//console.log(arraymulti[3]);

//for(i=0;i<=2;i=i+1){
//    console.log(i);
//for(j=0;j<=2;j++){
//    console.log(i'['++']['+j+']');
//}
//
//
//
//}

//var pro=parseInt(prompt('pick a number'));
//
//for(b=0;b<=pro;b=b+1){
//
//    console.log(b*2);
//
//
//
//}

//var pro=parseInt(prompt('choose a number'));
//var sqr= pro*pro;
//
//for(i=pro;i<=sqr;i=i+pro){
//
//    console.log(i);
//}
//var pro=parseInt(prompt('choose a number'));
//var add=pro*pro;
//
//for(i=pro;i<=45;i=i++add*2){
//
//    console.log(i);
//}
////alert("Hello, World!");
//
//
//var a= 100;
//
//do {
//
//    console.log(a);
//    a++
//} while ( a <10 );


//var arraymulti=[];
//arraymulti[0]=[];
//arraymulti[1]=[];
//arraymulti[2]=[];
//arraymulti[3]=[];
//
//arraymulti[0][0]=1;
//arraymulti[0][1]=2;
//arraymulti[0][2]=3;
//arraymulti[0][3]=4;
//
//arraymulti[1][0]=2;
//arraymulti[2][0]=3;
//arraymulti[3][0]=4;
//
//for(i=1;i<=3;i++){
//    console.log(arraymulti[i]);
//    for(j=1;j<=3;j++){
//       console.log(i+':'+j);
//       arraymulti[i][j]=arraymulti[0][i]*arraymulti[j][0];
//
//   }
//console.log(arraymulti[i]);
//}

////////////////////////conditional statements
//var i;
//for(i=0;i<10;i++){
//if(i<=5){
//    console.log(i);
//} else if(i<=7) {
//    console.log(10-i);
//}else {console.log('>7')}
//}
//
//var pro=prompt('Pick a color');
//
//
//if(pro=='grey'){
//
//console.log('grey');
//
//}
//
//else if (pro=='blue'){
//
//
//        console.log('blue');
//}
//
//var boat=Math.random();
//
//if (boat<=.5){
//    console.log('boat');
//}
//else {
//
//    console.log('car');
//}


//
//
//(condition to be met) ? first set of stuff : else stuff;

//var tern = Math.random();
//(Math.round(tern)==0)
//?
//console.log('heads')
//    :
//console.log('tails');

//var add =prompt('give a number');
//var minus = prompt('f or c');
//
// if (minus=="c")
//{
//    console.log(add*9/5+32);
//}
//else{
//
//    console.log((add-32)*5/9);
//}
//var grid = [];
//var terrain;
//var type;
//
//
//for(i=0;i<=9;i++) {
//
//    grid[i]=[];
//
//    for (j=0;j<=9;j++){
//
//        terrain = Math.random();
//
//        type = terrain <= .2 ? 'plain' : type = terrain <= .4 ? 'desert' : type = terrain <= .6 ? 'swamp' : type = terrain <= .8 ? 'grassland' : 'water';
//
//      grid[i][j] = type;
//console.log(grid[i][j]);
//    }
//}

//var zyx = 'How i spent my summer vacation';
//var num = 5;
//var exp = 10;
//
//var resultstring = zyx + num;
//var resultnumber = exp + num;

//console.log(resultnumber + resultstring);
//console.log(zyx.length);

//var height= prompt('what is the height');
//var base= prompt('what is the base 1');
//var bases= prompt('what is the base 2');
//
//console.log(height/2*(base+bases));



//var a=1;
//var l=2;
//var e=3;
//
//
//var ecal = a-l;
//console.log(ecal+':'+e);
//var acal=e+l;
//var lcal=-1*(e-a);
//
//var shoppinglist =['bread','butter','cheese','milk'];
//var list = prompt('Pick a number between 0-3');
//console.log(shoppinglist[list]);
//console.log(shoppinglist.length);
//shoppinglist.push('grapes');
//console.log(shoppinglist.length);
//
//for(i=0;i<shoppinglist.length;i++){
//console.log(shoppinglist[i]);
//}
//


//var storedpromptvalue = prompt('E(100%),G(75%),F(30%),P(0%)');
//var percentagefromprompt=0;
//var percentagepoints=10;
//
//
//
//if(storedpromptvalue.toUpperCase()=='E')
//{percentagefromprompt=1;}
//else if(storedpromptvalue.toUpperCase()=='G')
//{percentagefromprompt=.75;}
//else if(storedpromptvalue.toUpperCase()=='F')
//{percentagefromprompt=.3;}
//else{percentagefromprompt=0;}
//
//
//percentagepoints*=percentagefromprompt;
//
//console.log(percentagepoints);

















