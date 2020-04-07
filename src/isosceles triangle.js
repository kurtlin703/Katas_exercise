function isosceles(a) {
  for (var i = 1; i <= a; i++) {
    var p = " ";

    for (var j = 1; j <= 2 * p - 1; j++) {
      j >= p + 1 - i && j <= p - 1 + i ? (a += "*") : (a += " ");
    }

    console.log(a);
  }
}
isosceles(5);
