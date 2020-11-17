//Imprime primeros 10 números de la sucesión de lucas en un array
//Erick Cuevas Ceballos 3°F
var x = 2;
var y = 1;
var a = [];
var w;
for(i = 0; i <= 9; i++){
  w = x + y
  x = y;
  y = w;
  a = [w];
  console.log(a);
}