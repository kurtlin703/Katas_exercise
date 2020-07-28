function triangle(hash) {
  for (var i = 1; i <= hash; i++) {
    for (var s = 1; s <= i; s++) {
      console.log("#");
    }
    console.log("<br>");
  }
}

triangle(5);
