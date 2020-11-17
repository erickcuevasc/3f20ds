//Imprime primeros 10 números primos en un array
//Erick Cuevas Ceballos 3°F
var b = 1;
var a = [];
var c = [2,3,5,7];
console.log(c)
for(var b; b < 30; b++){
    if(b==1){
        continue;
    }
    if(b % 3 && b % 2 && b % 5 && b % 7){
        a = [b];
        console.log(a);
    }
}