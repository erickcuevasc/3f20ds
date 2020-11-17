//Potencia(s)/powerset
//Erick Cuevas Ceballos 3°F
var s = [3,1,4,2,3];
function P(x) {
return x.reduce((y, v) => y.concat(y.map(d => [v].concat(d))), [[]]);
};
P(s);
console.log(P(s));