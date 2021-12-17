let name={
    firstname:"Muc",
    lastname:"Ktd"
    
}

 let printFullName=function(hometown,state){
    console.log(this.firstname + " " + this.lastname+ " from "+ hometown + " , "+ state);
}

//first parameter  the refernce to the this variable
printFullName.call(name,"Kottilangad","Kasaragod");

let name2={
    firstname:"Mentor",
    lastname:"Bro",
   
}
//borrowing function
printFullName.call(name2,"Olampaara","Palakkad");


// passing  second arguments as array list
printFullName.apply(name2,["Olampaara","Palakkad"]);



// Dont directly invoke the method gives the copy of method that is invoked later.ie, binding the function
let printMyName = printFullName.bind(name2,"Olampaara","Palakkad") ;
console.log(printMyName);


printMyName();