var number=0;
 while(number<5){
   console.log(number);
       if(number==2){
        break;
    }
     number+=1;
 }

console.log("Breaking the loop when condition satisfy...")
 

var number=0;
while(number<5){
    number+=1;
     if(number==2){
         continue;
     }
   
    console.log(number);
 }
 console.log("Continue the loop when it reaches to the condition")

 
 var number=0;
while(number<5){
    number+=1;
    if(number<5){
     continue;   
    }
    console.log(number);

}



console.log("Continue the loop until it reaches to the condition")