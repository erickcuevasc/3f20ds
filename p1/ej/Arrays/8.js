//Imprime primeros 10 números con potencia X elevado a la Y
//Erick Cuevas Ceballos 3°F
var r;
var a = [];
for(i = 1; i <= 10; i++){
    var x = Math.round(Math.random()*(10-1)*1);
    var y = Math.round(Math.random()*(10-1)*1); 
    r  = Math.pow(x,y);
    a = ['potencia de:', x,'elevado a:', y , 'igual a:', r];
      console.log(a);
  }