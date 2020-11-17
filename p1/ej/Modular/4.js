//Qué hora será en n horas
//Erick Cuevas Ceballos 3°F
var h = 10;
var hx = Number(prompt('Ingresa el número de horas'));
var ha;
if(hx >= 14){
    ha = h + hx % 24 - 24;
console.log('La hora actual es: ' + ha);
}else{
    ha = h + hx % 24;
  console.log('La hora actual es: ' + ha);   
}

