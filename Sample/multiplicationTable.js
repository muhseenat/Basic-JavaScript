let input=require('readline-sync');

let num=input.question("Enter the number ");

for( var i=1;i<=10;i++){
  console.log(i+" * "+ num + " = " +i*num)
}