let input=require('readline-sync');

let limit=input.questionInt('Enter the limit : ');

 let array=[];
 console.log('Enter the array elements');
 for(let i=0;i<limit;i++){
     array.push(input.questionInt());
 }

console.log('Array become...')
let array2=[];
for(let i=0;i<limit-1;i++){
    array2.push(array[i]*array[i+1]);
}

console.log(array2);