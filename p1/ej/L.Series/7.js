var n = Number(prompt('ingresa el número límite'));
var x = Number(prompt('Ingresa el valor de x'));
for(i = 2; i <= n; i++){
    var senx;
    senx = x - Math.pow(x,i)/i;
    sen = senx + senx;
}
console.log(sen);