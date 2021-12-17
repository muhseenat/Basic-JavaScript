let input=require('readline-sync');

let limit=input.question("Enter the limit");
let array1=[];
let array2=[];
console.log("Enter first array");
for(let i=0;i<limit;i++){
    array1.push(input.question());
}
console.log("Enter the second array");
for( let i=0;i<limit;i++){
    array2.push(input.question());
}
console.log("After swapping");
for(let i=0;i<limit;i++){
    let temp=array1[i];
    array1[i]=array2[i];
    array2[i]=temp;
}
console.log(array1);
console.log(array2);