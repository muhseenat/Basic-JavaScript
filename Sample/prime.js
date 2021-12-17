let input=require('readline-sync');
let num=input.questionInt("Enter the number ");
var count=0;
 for(let i=2;i<=num-1;i++){
   
     if(num%i==0){
         count=1;
         break;
     }
 }
 if (count==0){
     console.log("Entered number is prime");

 }
 else{
     console.log("Entered number is not prime");
 }