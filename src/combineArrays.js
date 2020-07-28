function combine(array1, array2) {
  if (array1.length == array2.length) {
    let combineArrays = [];
    for (let i = 0; i < array1.length; i++) {
      combineArrays.push(array1[i], array2[i]);
    }
    console.log(combineArrays);
  }
}
combine([11, 22, 33], [1, 2, 3]);
