let input=require('readline-sync')

let my_height=input.question('Enter the height :');

try {
  if (isNaN(my_height)) throw 'notANumberError';
  if (my_height>8) throw 'hugeHeightError';
  if(my_height<8) throw 'tinyHeightError';
  if(my_height=8) throw '8';
    
} catch (error) {
    console.log(error);
}