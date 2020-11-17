//Programa que genera n nombres aleatorios
//Erick Cuevas Ceballos 3°F
var n = Number(prompt('Ingresa el número de nombres a generar'));
for(c = 1; c <= n; c++){
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