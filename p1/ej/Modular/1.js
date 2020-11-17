//Que día es en n número de días
        //Erick Cuevas Ceballos 3°F
        var n = Number(prompt('Si hoy es lunes ¿Qué día sera en n días?, ingresa el número de días'));
        var  d;
        d = n % 7;
        if(d ==1){
          console.log('Lunes');   
        }
        if(d ==2){
          console.log('Martes');   
        }
        if(d ==3){
          console.log('Miércoles');   
        }
        if(d ==4){
          console.log('Jueves');   
        }
        if(d ==5){
          console.log('Viernes');   
        }
        if(d ==6){
          console.log('Sábado');   
        }
        if(d ==0){
          console.log('Domingo');   
        }