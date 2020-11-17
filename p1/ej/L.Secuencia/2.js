//Permutaciones(s)
//Erick Cuevas Ceballos 
var s = [3,1,4,2,3];
function Pe(s){
const x = [];
const np = (a, y = []) =>{
if (!a.length){
    x.push(y);
    return;
};
for(let i in a){
    let n = a.slice();
    let c = n.splice(i,1)
    np(n, y.concat(c))
  };
}; 
np(s);
return x;
};
Pe(s);
console.log(Pe(s));