//Imprime n número factorial
//Erick Cuevas Ceballos 3°F
var x = Number(prompt('ingresa un número para factorizar'));
var r = 1;  
var c = 1;
   for(var c; c <= x; c++){
    r = r * c;    
}
console.log(r);