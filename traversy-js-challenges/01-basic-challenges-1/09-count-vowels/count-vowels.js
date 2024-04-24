function countVowels(str, vowels) {
  let counter = 0;
  let name = str.toLowerCase();

  for (let i = 0; i < name.length; i++) {
    const char = name[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      counter++;
    }
  }

  return counter;
}

module.exports = countVowels;
