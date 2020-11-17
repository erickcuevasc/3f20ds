//Imprime primeros 10 números impares en un array
//Erick Cuevas Ceballos 3°F
var a = [];
var x = 0;
var c = 0;
while(c < 20){
  x++;
  if(x % 2){
      a = [x];
   console.log(a);
  }
  c++;
}