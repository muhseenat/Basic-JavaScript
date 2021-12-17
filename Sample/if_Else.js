var input=require('readline-sync')
 

mark=input.question("Enter the mark  ");

if(mark>=50){
    console.log("Passed")
}
else{
    console.log("Failed")
}