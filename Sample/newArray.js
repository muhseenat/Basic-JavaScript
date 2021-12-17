let input=require('readline-sync');
module.exports=class newArray {

  getArray(limit,arr){
    console.log("Enter the first array ");
    for(let i=0;i<limit;i++){
     arr[i]=[];
         for(let j=0;j<limit;j++){
             arr[i][j]=input.questionInt();
         }

     }
     return arr;
 }

 displayArray=(arr)=>{
    console.log(arr);
   }



}