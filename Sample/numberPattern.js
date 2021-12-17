
let display="";
let count=1;

for(let i=1;i<=4;i++){
  
    for(let j=1;j<=i;j++){
        display += count+++"  ";  
          
    }
    display += "\n";
}

console.log( display );
