//Diferencia entre map y weakmap
//Erick Cuevas Ceballos
//http://blog.enriqueoriol.com/2016/04/es6-maps-sets-weaks.html#:~:text=Los%20WeakMaps%20son%20similares%20a,el%20garbage%20collector%20podr%C3%A1%20liberarlo.
/*Los WeakMaps son similares a los Maps, pero con algunas diferencias:

Un WeakMap solo acepta objetos como claves
La referencia a las claves es débil, lo que significa que si no hay otras referencias 
al objeto que actúa como clave, el garbage collector podrá liberarlo.*/
let key = {userId:1};
let key2 = {userId:2};
let weakmap = new WeakMap();

weakmap.set(key,"Alex");
weakmap.has(key); //true
weakmap.get(key); //Alex
weakmap.delete(key); // true
weakmap.get(key); //undefined

weakmap.set(key2,"Vicky");
weakmap.size; //undefined
key2=undefined;
weakmap.get(key2); //undefined
