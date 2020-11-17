//Imprime primeros 10 números impares con números negativos en un array
//Erick Cuevas Ceballos 3°F
var a = [];
var x = 0;
var c = 0;
while(c < 20){
  x++;
  a = [x];
  if(x % 2){
      if(x == 1 || x == 5 || x == 9 || x == 13 || x == 17){
        console.log('-'+a);
      }else{
        console.log(a);  
      }
  }
  c++;
}