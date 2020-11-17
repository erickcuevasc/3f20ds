//Elementos repetidos
//Erick Cuevas Ceballos 3°F
var s = [3,1,4,2,3]
var rep = s.filter(function(item, index, array) {
  return array.indexOf(item) === index;
})
console.log('Elementos repetidos eliminados')
console.log(rep);