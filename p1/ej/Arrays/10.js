//Imprime primeros el seno de 10 números 
//Erick Cuevas Ceballos 3°F
var x = 0;
var s;
var a = [];
for(i = 1; i <= 10; i++){
    x++
    s = Math.sin(x);
    a = ['seno de:',i,'igual a',s];
    console.log(a);
}