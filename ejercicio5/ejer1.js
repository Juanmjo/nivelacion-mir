function sum(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}
console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));
