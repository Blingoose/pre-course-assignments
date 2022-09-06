const longestWord = (sentence) => {
  let longest = "";
  const forbiddenChar =
    "1234567890!@#$%^&*()_+±§`?≈ç√∫˜µ≤≥÷«æ…¬˚∆˙©ƒ∂ßåœ∑´®†¥¨ˆøπ“‘¡™£¢∞§¶•ªº–≠~<>';\":|{}";
  for (let i = 0; i < sentence.length; i += 1) {
    if (forbiddenChar.indexOf(sentence[i]) < 0) {
      longest += sentence[i];
    }
  }
  longest = longest.split(" ");
  longest.sort((a, b) => b.length - a.length);
  return longest[0];
};
