var input=require('readline-sync');

let totalMark=input.question("Enter the total mark  ")

if (totalMark>90){
    console.log( " A");

}
else if(totalMark>79){
    console.log( " B");
}
else if(totalMark>69){
    console.log( " C");
}
else if(totalMark>59){
    console.log( " D");
}
else if(totalMark>49){
    console.log( " E");
}
else{
    console.log( " Failed");
}