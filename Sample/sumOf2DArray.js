let input=require("readline-sync");

let limit = input.question("Enter the limit ");
let array1=[];
let array2= [];
console.log("Enter the first array ");
for(let i=0;i<limit;i++){
    array1[i]=[];
    for(let j=0;j<limit;j++){
        array1[i][j]=input.questionInt();
    }
   
  }
  console.log("Enter the second array ");
  
 for(let i=0;i<limit;i++){
     array2[i]=[];
     for(let j=0;j<limit;j++){
        array2[i][j]=input.questionInt();
     }
   
   }

  let sum=[];
 

for(var i=0;i<limit;i++){
   sum[i]=[];
   for(var j=0;j<limit;j++){
        sum[i][j]=array1[i][j] + array2[i][j];
     }
   
 }
 console.log(sum);
 

 