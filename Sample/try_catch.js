let input=require('readline-sync');


 let my_string=input.question('Enter the input ');
  my_string=Number(my_string)?Number(my_string):my_string;
try {
    console.log('Reversed string is : '+ my_string.split('').reverse().join(''));

} catch (error) {
    console.log(error);
}

finally{
    console.log('Type of my_string is : ' +typeof(my_string));
}

