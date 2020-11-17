//Números primos, recursión
//Erick Cuevas Ceballos 3°F
var primos = [];
for(var n=3;n<=100;n+=2) {
  if(primos.every(function(prime){return n%prime!=0})) {
    primos.push(n);
  }
}
primos.unshift(1);
console.log(primos);