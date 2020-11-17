//Imprime primeros 10 números primos
//Erick Cuevas Ceballos 3°F
var b = 1;
console.log(2);
console.log(3);
console.log(5);
console.log(7);
for(var b; b < 30; b++){
    if(b==1){
        continue;
    }
    if(b % 3 && b % 2 && b % 5 && b % 7){
        console.log(b);
    }
}