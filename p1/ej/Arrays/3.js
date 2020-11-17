//Imprime primeros 10 números de la serie de fibonacci en un array
//Erick Cuevas Ceballos 3°F
var a = [];
var x = 0;
var y = 1;
var w;
for(i = 0; i <= 9; i++){
  w = x + y
  x = y;
  y = w;
  a = [w];
  console.log(a);
}