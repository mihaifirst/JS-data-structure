function findMaxNumber(arr) {
  let maxnumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxnumber < arr[i]) {
      maxnumber = arr[i];
    }
  }
  return maxnumber;
}

module.exports = findMaxNumber;
