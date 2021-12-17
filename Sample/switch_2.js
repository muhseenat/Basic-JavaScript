var person= {
    name:"Mentor",
    age:45
}


switch(true){
    case (person.age>50):
        console.log(person.name + " is going to be retried");
        break;
    case (person.age==50):
        console.log(person.name + " has a very little time");
        break;
    default:console.log("we don't know nothing about him");        
}


