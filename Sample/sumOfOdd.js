let input=require('readline-sync');

let limit=input.question("Enter the limit ");
let sum=0;
for(i=1;i<=limit;i++){
    if(i%2!=0){
        sum =sum+i;
    }
}

console.log("Sum of odd numbers = "+ sum);