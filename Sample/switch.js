let input=require('readline-sync')

   let choice=input.question("Enter your choice\n1-Sunday \n 2-Monday \n 3-Tuesday \n 4-Wednesday \n 5-Thursday \n 6-Friday \n 7-Saturday \n");
   choice =parseInt(choice);
switch(choice){
    case 1:console.log("Sunday");
    break;
    case 2:console.log("Monday");
    break;
    case 3:console.log("Tuesday");break;
    case 4:console.log("Wednesday");break;
    case 5:console.log("Thursday");break;
    case 6:console.log("Friday");break;
    case 7:console.log("Saturday");break;
    default:console.log("Invalid Entry");

}