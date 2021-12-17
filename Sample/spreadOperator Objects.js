const name = {
  firstName:'Cris',
  secondName:'Rono'
};

const address = {
    city:'Madeira',
    country:'Portugal',
    pin:671315
  };

  const person = {...name,...address};
  console.log(person);
 