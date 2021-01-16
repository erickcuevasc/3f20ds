//Sacar n fila de una matriz
//Erick Cuevas Ceballos 3°F
arr =[
    [1,0,7],
    [3,2,-8],
    [4,5,-6]
    ],arrText='';
console.log("Matriz");
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arrText+=arr[i][j]+' ';
        }
        
        console.log(arrText);
        arrText='';
    }
    console.log("Fila"+ 1);
    //Mofica de 0 a 2 para sacar una de las 3 filas
    console.log(arr[1]);
