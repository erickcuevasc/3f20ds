//Quinto número primo
//Erick Cuevas Ceballos 3°F
var b = 1;
for(var b; b <= 11; b++){
    if(b==1){
        continue;
    }
    if(b % 3 && b % 2 && b % 5 && b % 7){
        console.log(b);
    }
}