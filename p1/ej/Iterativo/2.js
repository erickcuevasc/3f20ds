//Generar 10e5 números aleatorios
//Erick Cuevas Ceballos 3°F
console.time();
let s = 0;
let t = 0;
var n = Math.pow(10,5);
for(i = 0; i <= n; i++){
    var r =Math.round(Math.random()*(n-1) * 1);
    console.log(r);
    s++;
}
t++;

let stp;
stp = s + t;
console.log('Inversiones: ' + stp);
console.timeEnd();
