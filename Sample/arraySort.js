let input=require("readline-sync");

let limit = input.question("Enter the limit ");
let array= [];
 console.log("Enter the Array elements ");
 
 for(let i=0;i<limit;i++){
   array.push(input.question());
 }

 array.forEach(descSort);

 function descSort(value){
     array.sort(function(a,b){
         return b-a;
     })
 }

 console.log(array);