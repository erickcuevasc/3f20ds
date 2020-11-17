//Imprime primeros 10 números aleatorios en un array
//Erick Cuevas Ceballos 3°F
var a = [];
for(i = 1; i <= 10; i++){
    var x = Math.round(Math.random()*(10-1)*1);  
    a = [x];
      console.log(a);
  }