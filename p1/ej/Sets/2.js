//Programa que genera 10 nombres aleatorios
//Erick Cuevas Ceballos 3°F
for(c = 0; c <= 9; c++){
function generateRandom(len){
    let RandomPass = '';
    let wordchars = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    for(i = 0; i <= len; i++){
        RandomPass += wordchars.charAt(Math.floor(Math.random() * wordchars.length));
        
    }
    console.log(RandomPass);
}
generateRandom(8);
}