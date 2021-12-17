const getUser = () =>{
    return{
        name:'Mentor',
        surname:'Bro',
        gender:'Male',
        address:{
            Place:'Olampaara',
            city:'Palakkad',
            fulladdress:{
                  doorName:66,
                  street:'LA st'
            }
        },
        age:22
    }
};


const user = getUser();

// const name = user.name;
// const age = user.age;
// const country  = user.address.city;
// const doorNumber = user.address.fulladdress.doorName;
 
 const {name,age,address:{city:country}} = user;
 const {address:{fulladdress:{doorName:doorNumber}}}=user;


console.log(name);
console.log(age);
console.log(country);
console.log(doorNumber);