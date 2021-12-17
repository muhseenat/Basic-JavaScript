let input=require('readline-sync');

class my_Array{
       
     main(){
        let limit=input.questionInt('Enter the limit : ');
        let array=[];
         array=getArray(limit);
        displayArray(array);
    }
}

       




  getArray=(limit)=>{ 
    console.log("Enter the first array ");
        for(let i=0;i<limit;i++){
          let arr =[];
             for(let j=0;j<limit;j++){
                 arr[i][j]=input.questionInt();
           }

        }
    }



    
    displayArray=(array)=>{
        console.log(array);
       }
let obj=new my_Array;
obj.main();
