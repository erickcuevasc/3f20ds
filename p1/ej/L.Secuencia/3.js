//Combinaciones(s)
//Erick Cuevas Ceballos 3°F
var s = [3,1,4,2,3];
function c (s){
var a = [];
    const comb = (arr, y = []) => {
    if (arr.length === 0) {
            a.push(y);
        }else {
            for (let i = 0; i < arr.length; i++) {
                let n = arr.slice();
                let c = n.splice(i, 1);
                comb(n, y.concat(c));
            }
        }
    }
comb(s)
return a;
}
c(s);
console.log(c(s));