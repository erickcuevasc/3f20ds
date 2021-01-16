//Sort
//Erick Cuevas Ceballos 3°F
const Alumnos = [
    {Nombre: "Erick", Calificación: 9},
    {Nombre: "Daniel", Calificación: 10},
    {Nombre: "Juan", Calificación: 8},
    {Nombre: "Axel", Calificación: 7},
    {Nombre: "Luis", Calificación: 8.4},
    {Nombre: "Brandon", Calificación: 5},
    {Nombre: "Javier", Calificación: 9.3}
]
const AlumnosOrdenados = Alumnos.sort((a1, a2) => {
    return a2.Calificación - a1.Calificación
})
console.log(AlumnosOrdenados);
