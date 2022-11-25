/* Paso 1 Crear el objeto*/
var pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};
//console.log(pedro);

/*Paso 2 Imprimir el valor de la llave edad */
console.log("La edad de Pedro es: " + pedro.edad);

/*Paso 3 Add una propiedad con la llave estatura y asignarle un valor*/
pedro.estatura = 1.8;
//console.log(pedro);

/*Paso 4 Eliminar la propiedad con llave activo */
delete pedro.activo;
//console.log(pedro);

/*Paso 5 Recorre las propiedades e imprimir linea por linea la llave : el valor */

var llaves = Object.keys(pedro);
for (var i = 0; i < llaves.length; i++) {
  var llave = llaves[i];
  console.log(llave + " : " + pedro[llave]);
}

/*Paso 6 Add al objeto una función saluda que retorne una frase utilizando la propiedad nombre con su respectivo valor */
pedro.frase = function saluda() {
  return console.log("Hola, me llamo " + this.nombre);
};

/*Paso 6 Llama a la función saluda y verificar el mensaje */
//Permite llamar al método saluda que es una propiedad almacenada en la llave frase del objeto pedro
pedro.frase();
