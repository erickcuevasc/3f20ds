//Torres de Hanoi
//Erick Cuevas Ceballos 3°F
var hanoi = function(disc,src,aux,dest){
    if(disc > 0){
      hanoi(disc -1,src,dest,aux);
      console.log('Movimiento disco '+disc+' de '+src+' a '+dest);
      hanoi(disc -1,aux,src,dest);
    }
  };
  hanoi(1,'A','aux','C');
  hanoi(2,'A','aux','C');
  hanoi(3,'A','aux','C');
  hanoi(4,'A','aux','C');
  hanoi(5,'A','aux','C');