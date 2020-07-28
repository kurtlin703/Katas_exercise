function isosceles(x) {
  for (var i = 1; i <= x; i++) {
    var s = " ";
    for (var j = 1; j <= 2 * x - 1; j++) {
      j >= x + 1 - i && j <= x - 1 + i ? (s += "#") : (s += " ");
    }
    console.log(s);
  }
}
isosceles(5);
