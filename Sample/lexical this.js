const cars = {
    name :'Mentor',
    cars: ['Benz','Audi'],
    toString:function() {
         console.log(`${this.name} has ${this.cars}`);
        //  const that=this; //here this assign to another one for accessing this in foreach
        this.cars.forEach(function (car) {
           console.log(`${this.name} has ${car}`); //Here name shows undefined because here lost the context of this keyword.
        }.bind(this)); //Here bind () using to solve this problem 
    }
}

//If we lose the context of this keyword we can also use arrow function to solve the prblm.That is the easiest way.

cars.toString();