//Ln (1+x) 
//Erick Cuevas Ceballos 3°F
var ln1;
var ln;
var n = Number(prompt('Ingresa el número límite'));
var x = Number(prompt('Ingresa el número a calcular'));
for(i = 1; i <= n; i++){
ln1 = x  - Math.pow(x,i)/i;
ln = ln1 + ln1;
} 
console.log('R = '+ ln);