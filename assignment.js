// feetToMile
function feetToMile(feet){
var Mile=feet/5280;
  return Mile;
}
var result=feetToMile(200);
console.log("The given feet is equal to",result,"mile");

// woodCalculator
function woodCalculator(chairWood,tableWood,bedWood){
var chair=chairWood*1;
var table=tableWood*3;
var bed=bedWood*5;
var total=chair+table+bed;
return total;
}
var result=woodCalculator(1,1,1);
console.log("The numbers of wood that we need is",result);



//brickCalculator
function brickCalculator(floor){
    
        var brick1= floor*15*1000;
         var brick2= 10*15*1000+ (floor-10)*12*1000;
         var brick3=  10*15*100+20*12*1000+(floor-30)*10*1000;

        if(floor<=10 && floor>0){
            return brick1 ;
        }
         if(floor<=20 && floor>0 ){
            return brick2;
        }
         if(floor>20 && floor>0){
            return brick3;
        }
                  
}
var result= brickCalculator(21);
console.log("The number of bricks we need in order to make the bilding is",result);



// tinyFriend

function tinyFriend(name){
  var minimumName=name[0];
  var minimum= name[0].length
  for(var i=0;i<name.length;i++){
    var currentName=name[i];
    var current=name[i].length;
  
  
    if(current<minimum){
      minimumName=currentName;}
     }
    return minimumName;
  }
var name=['mau','jamal','rahim','karimullah','karim'];
var result= tinyFriend(name);
console.log("The smallest name is",result);

    

  




