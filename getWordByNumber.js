const getWordByNumber = (num) => {
  const myWordsMap = new Map([
    // Map wuth keys (0-9) and value (words)
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
  ]);
  // if true, get a value in key's place.
  if (myWordsMap.get(num)) {
    return myWordsMap.get(num);
  }
  return "invalid";
};
