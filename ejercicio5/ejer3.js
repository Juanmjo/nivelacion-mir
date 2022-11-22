function maxIndex(vector) {
  if (vector != 0) {
    var numMayor = 0;
    var indMayor = 0;
    for (var i = 0; i <= vector.length; i++) {
      if (vector[i] > numMayor) {
        numMayor = vector[i];
        indMayor = i;
      }
    }
    return indMayor;
  } else {
    return -1;
  }
}

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));
