let input=require('readline-sync');
let newArray=require ("./newArray");

function main(){
    let limit=input.questionInt('Enter the size : ');
    let array1= [];
    let array= new newArray();
    array1=array.getArray(limit,array1);
    array.displayArray(array1);
}

main();