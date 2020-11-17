//Qué hora será en 2500 horas
//Erick Cuevas Ceballos 3°F
var h = 10;
var hx = 2500;
var ha;
if(hx >= 14){
    ha = (h + hx % 24 - 24) * - 1;
console.log('La hora actual es: ' + ha);
}else{
    ha = h + hx % 24;
  console.log('La hora fue: ' + ha);   
}
