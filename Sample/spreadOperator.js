const arr1=['Mentor','Bro'];
const arr2=['ME','Only me'];

function print(name,callname,nothing){
    console.log('He is my %s I call him as %s nothing %s',name,callname,nothing);


}

//concat 2 arrays
const arr3=[...arr1,...arr2];
arr3.forEach(function(name){
    console.log(name);
});

//passing array as argument 
print(...arr1);


//converting string into array and printing letters by letters

const name1='Mentor';
const nameToArray=[...name1];
nameToArray.forEach(function(characters){
    console.log(characters);
});
//Using rest operator
const addition=function(n1,n2,...numbers){
  return n1+n2+' Rest Elements '+ numbers;
}

const numbers=[1,2,3,5,8,];

const add= addition(...numbers);
console.log(add);


