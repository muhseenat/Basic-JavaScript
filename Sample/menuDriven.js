let input=require('readline-sync');
let num1=input.questionInt("Enter 2 numbers ");
let num2=input.questionInt();
let choice=input.question("Enter your choice \n + -Addition \n - -Substraction \n * -Multiplication \n / -Division \n");

function addition(){
    let result=num1+num2;
    console.log("Result= "+ result);
}
function subtraction(){
    let result=num1-num2;
    console.log("Result = "+ result);
}
function multiplication(){
    let result=num1*num2;
    console.log("Result = "+ result);
}
function division(){
    let result=num1/num2;
    console.log("Result = "+ result);
}

switch(choice){
    case '+':addition();
    break;
    case '-':subtraction();
    break;
    case '*':multiplication();
    break;
    case '/':division();
    break;
    default:console.log("Invalid choice");
}