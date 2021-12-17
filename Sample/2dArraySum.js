let input=require('readline-sync');

function main(){
    let array1=[];
    let array2=[];
    let sum=[];
    let limit=input.questionInt('Enter the limit : ');
    getArray(array1,array2,limit);
    addArray(array1,array2,limit,sum);
    displayArray(sum);
}
main();


function getArray(array1,array2,limit){
    
    console.log("Enter the first array ");
       for(let i=0;i<limit;i++){
            array1[i]=[];
                for(let j=0;j<limit;j++){
                    array1[i][j]=input.questionInt();
                }
   
         }
    console.log("Enter the second array ");
         for(let i=0;i<limit;i++){
            array2[i]=[];
               for(let j=0;j<limit;j++){
                    array2[i][j]=input.questionInt();
                 }
   
         }
   }

   function addArray(a1,a2,limit,sum){
    
    for(var i=0;i<limit;i++){
        sum[i]=[];
          for(var j=0;j<limit;j++){
              sum[i][j]=a1[i][j] + a2[i][j];
            }
       
     }

   }

   function displayArray(val){
       console.log(val);
   }