const calculator = name => {
    return {
        //name : name 
        name,// Because of the enhaced object properties we can omit property name 
        
        
        //add : function (n1,n2){
        //     return n1+n2;
        // }
        add(n1,n2){
            return n1+n2;
        }
        // we can also write function like this because of enhanced object properties
    
    }
    
}

 const calc=calculator('casio');
console.log( calc.name); 
 console.log(calc.add(35,59));


