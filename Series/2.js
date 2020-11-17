//Imprime primeros 10 números impares con números negativos
//Erick Cuevas Ceballos 3°F
var x = 0;
var c = 0;
while(c < 20){
  x++;
  if(x % 2){
      if(x == 1 || x == 5 || x == 9 || x == 13 || x == 17){
        console.log('-'+x);
      }else{
        console.log(' '+x);  
      }
  }
  c++;
}