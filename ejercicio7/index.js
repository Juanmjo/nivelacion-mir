/*Paso 1 crear un objeto vario */
var receta = {};

/*Paso 2 add una propiedad en el objeto */
receta.nombre = "Sandwich";

/*Paso 3 add una propiedad con un vector vacio */
receta.ingredientes = [];

/*Paso 4 add un elemento de tipo objeto al vector */
receta.ingredientes = [{ nombre: "Pan", cantidad: 2 }];

/*Paso 5 add otro elemento de tipo objeto al vector */
receta.ingredientes.splice(1, 0, { nombre: "Pan", cantidad: 1 });

/*Paso 6 Imprime en consola el nombre de la primera propiedad del objeto */
console.log(receta.ingredientes[0].nombre);

/*Paso 7 Suma las cantidades de los ingredientes y muestar el resultado */
function sumaIngredientes(unidad) {
  let resultado = 0;
  for (i = 0; i < unidad; i++) {
    resultado = receta.ingredientes[i].cantidad + resultado;
  }
  return resultado;
}

console.log(sumaIngredientes(2));
