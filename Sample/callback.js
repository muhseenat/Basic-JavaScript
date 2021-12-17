function my_function(name,callback_function){
   console.log(callback_function(name));
}

var callback_function = function(name){
    return name +"Bro";
}

my_function("Mentor ",callback_function)