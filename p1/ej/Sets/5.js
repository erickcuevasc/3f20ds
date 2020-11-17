//Ejemplo Weakset
//Erick Cuevas Ceballos 3°F
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/WeakSet#:~:text=Las%20principales%20diferencias%20con%20el,la%20colecci%C3%B3n%20se%20mantienen%20d%C3%A9bilmente..
/*A diferencia de  Sets, 
WeakSets  son solamente colecciones de objetos y 
no contienen valores arbitrarios de cualquier otro tipo.*/
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo no fue agregado al conjunto

ws.delete(window); // elimina window del conjunto
ws.has(window);    // false, window fu