let input=require('readline-sync');

let myArray=[1,2,3,4,5,1];

function myFilter(myArray,callback){
  console.log(callback(myArray));
}


 
function callback(myArray){
 var sum= myArray.reduce((total,val)=>total+val);
   if(sum%2==0){
       return true;
   }
   else{
       return false;
   }
}


myFilter(myArray,callback);

