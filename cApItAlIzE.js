const cApItAlIzE = (word) => {
  let arrVowel = ["a", "e", "i", "u", "y", "o"];
  let wordToString = word;
  let changedWord = "";
  for (let i = 0; i < wordToString.length; i += 1) {
    if (arrVowel.indexOf(word[i]) >= 0) {
      changedWord += wordToString[i].toUpperCase();
    } else {
      changedWord += wordToString[i];
    }
  }
  return changedWord;
};
