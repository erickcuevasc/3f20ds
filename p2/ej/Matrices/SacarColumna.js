//Sacar n columna de una matriz
//Erick Cuevas Ceballos 3°F
function getCol(matrix, col){ 
    var column = []; 
    for(var i=0; i<matrix.length; i++){ 
     column.push(matrix[i][col]); 
    } 
    return column; 
   } 
   var arr =[
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
    //Modifica de 0 a 2 para sacar una de las 3 columnas
    getCol(arr,0);