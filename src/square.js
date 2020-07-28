function square(hash) {
  for (var i = 1; i <= hash; i++) {
    for (var s = 1; s <= hash; s++) {
      console.log("#");
    }
    console.log("<br>");
  }
}
square(4);
