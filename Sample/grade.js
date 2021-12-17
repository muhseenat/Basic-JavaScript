let input=require('readline-sync');

let WT=input.questionInt('Enter the written test mark : ');
let lab=input.questionInt('Enter the lab score : ');
let assign=input.questionInt('Enter the assingnment score : ');
 let grade=(WT*70)/100+(lab*20)/100+(assign*10)/100;
 console.log('Grade of the student is '+ grade);