function join(cadena) {
  var mensaje = "";
  for (var i = 0; i <= cadena.length; i++) {
    mensaje += cadena[i] + " ";
  }
  return mensaje;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "it", "Real"]));
console.log(join([]));
