function countOccurrences(name, litera) {
  let counter = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === litera) {
      counter++;
    }
  }
  return counter;
}

module.exports = countOccurrences;
