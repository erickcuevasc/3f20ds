//Factorial de un número
//Erick Cuevas Ceballos
var n = prompt('Ingresa un número');
function factorial(n){
    //console.trace(n);
    if (n===0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}