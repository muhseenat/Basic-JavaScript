let input=require('readline-sync');

var P=parseInt(input.question("Enter the Principal Amount : "));
var R=parseFloat(input.question("Enter the Interest Rate  : "));
var n=parseFloat(input.question("Enter the number of years : "));
let simpleInterest=(P*R*n)/100;

console.log("Simple Interest = " + simpleInterest);