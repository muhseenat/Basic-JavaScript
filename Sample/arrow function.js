
// Regular functions

// const  hello = function( ){
//     const  name = 'Mentor';
//     return `Hello ${name}`;
// };

// const power = [1,2,3,4,5,6].map(function(number,index){
//     return Math.pow(number,index) ;
// });

// const add = function (n1,n2){
//     return n1+n2;
// };

// const milesToKm = function (miles) {
//     return miles * 1.60934;
// };


// console.log(hello());
// console.log(power);
// console.log(add(3,5));
// console.log(milesToKm(2));




//Arrow functions

const  hello = ( ) =>{
    const  name = 'Mentor';
    return `Hello ${name}`;
};

const power = [1,2,3,4,5,6].map((number,index) => Math.pow(number,index) );

const add =(n1,n2) => n1+n2;

const milesToKm = miles => miles * 1.60934;


console.log(hello());
console.log(power);
console.log(add(3,5));
console.log(milesToKm(2));