//Imprime primeros 10 números triangulares en un array
//Erick Cuevas Ceballos 3°F
var x = 0;
var a = [];
for (i = 1; i <= 10; i++ ){
    x++;
     x = i * (i + 1) / 2;
     a = [x];
     console.log(a); 
}