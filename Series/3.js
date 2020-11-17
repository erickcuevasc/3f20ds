//Imprime primeros 10 números de la serie de fibonacci
//Erick Cuevas Ceballos 3°F
var x = 0;
var y = 1;
var w;
console.log(0);
console.log(1);
for(i = 0; i <= 9; i++){
  w = x + y
  x = y;
  y = w;
  console.log(w);
}