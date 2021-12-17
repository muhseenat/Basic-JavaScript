let input=require('readline-sync');

let string=input.question("Enter the string : ");

//change the string into array using split() function and reverse it using 
//reverse() function and join using it by using join()  function.


let newString= string.split("").reverse().join("");

if(string==newString){
     console.log("Entered string is palindrome ");
 }
 else{
     console.log("Entered string is not palindrome")
 }
