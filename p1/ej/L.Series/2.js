//Números aleatorios de 1 a n potencia x elevado a y
//Erick Cuevas Ceballos 3°F
var n = prompt('Ingresa el número máximo');
for(i = 1; i <= n; i++){
    var x = Math.round(Math.random()*(n-1)*1);
    var y = Math.round(Math.random()*(n-1)*1); 
    r  = Math.pow(x,y);
     console.log('Potencia de: '+ x +' elevado a:' + y + ' igual a:' + r);
};