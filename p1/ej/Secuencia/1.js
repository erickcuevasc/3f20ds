//Secuencia promedio
//Erick Cuevas Ceballos 3°F
var s = [3,1,4,2,3];
var suma = 0;
var avg;
    s.forEach (function(s){
        suma += s;
    });
    avg = suma / s.length;
    console.log(avg);