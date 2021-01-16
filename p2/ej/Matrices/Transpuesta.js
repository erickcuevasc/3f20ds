//Matriz Transpuesta
//Erick Cuevas Ceballos 3°F
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
    var arr1 =[
        [1,3,4],
        [0,2,4],
        [7,-8,-6]
        ],arr1Text='';
    console.log("Matriz transpuesta");
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr1[i].length; j++) {
                arr1Text+=arr1[i][j]+' ';
            }
            
            console.log(arr1Text);
            arr1Text='';
        }
    