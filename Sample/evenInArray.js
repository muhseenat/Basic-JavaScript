let input=require('readline-sync');

let limit = input.question("Enter the limit ");
let array= [];
 console.log("Enter the Array elements ");
 
 for(let i=0;i<limit;i++){
   array.push(input.question());
 }
 var count=0;
 array.forEach(checkEven);

 function checkEven(value){
     if(value%2==0){
         count=count+1;
     }
    
 }
 console.log("Number of even numbers in the given array is  "+count);