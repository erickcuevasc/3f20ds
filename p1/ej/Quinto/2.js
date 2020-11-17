//Quinto número de la suceción de lucas
//Erick Cuevas Ceballos 3°F
var x = 2;
var y = 1;
var w;
for(i = 0; i <= 4; i++){
  w = x + y
  x = y;
  y = w;
}
console.log(w);