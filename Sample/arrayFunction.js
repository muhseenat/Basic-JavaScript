let input=require('readline-sync');

function main(){
    let array=[];
    getArray(array);
    displayArray(array);
}
main();


function getArray(array){

let limit=input.question("Enter the limit : ");
console.log("Enter array elements  ");
for(let i=0;i<limit;i++){
    array.push(input.questionInt());  
      }
}

function displayArray(array){
  
        console.log(array)
}
