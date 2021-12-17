const person =['Mentor','Olampaara','Palakkad','Kerala','India'];


// const name=person[0];
// const city = person[1];
// const district = person[2];

const [name,city,district,...rest] = person;

console.log(`${name},${city},${district}`);
 console.log(rest);