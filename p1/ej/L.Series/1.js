//Números aleatorios de 1 hasta N
//Erick Cuevas Ceballos 3°F
var n = Number(prompt('Ingresa el número máximo a generar'));
for(i = 1; i <= n; i++){
var r = Math.round(Math.random()*(n - 1) * 1);
console.log(r);
}; 