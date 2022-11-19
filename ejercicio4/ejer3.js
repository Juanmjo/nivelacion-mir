var acum = 0;

function suma(number) {
  if (number > 0) {
    for (var i = 0; i <= number; i++) {
      acum = i + acum;
    }
  }
  return acum;
}

console.log(suma(3));
