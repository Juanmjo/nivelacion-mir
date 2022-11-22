function max(vector) {
  let elMayor = 0;
  for (var i = 0; i < vector.length; i++) {
    if (vector[i] > elMayor) {
      elMayor = vector[i];
    }
  }
  if (elMayor === 0) {
    return undefined;
  } else {
    return elMayor;
  }
}
console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));
