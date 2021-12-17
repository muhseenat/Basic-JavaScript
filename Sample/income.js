let input=require('readline-sync');


let income=input.questionInt('Enter the annual income : ');
let tax;


 switch(true){
     case (income>=1000000 && income<=5000000):
         tax=(income*30)/100;
         console.log( 'Income tax amount : '+tax);
         break;
     case (income>=500000):
        tax=(income*20)/100;
        console.log( 'Income tax amount : '+tax);
        break;
     case(income>= 250000):
        tax=(income*5)/100;
        console.log( 'Income tax amount : '+tax);
         break;
     default:  console.log('No Tax');    
 }