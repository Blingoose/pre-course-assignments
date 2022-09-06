wordsArray = [
  "spiderman",
  "javascript",
  "memphis",
  "macbook",
  "tamaguchi",
  "pineapple",
];

let word = "";
guessedArray = [];
function containsSpecialChars(str) {
  const specialChars =
    /[!@#$%^&*()_+±§`?≈ç√∫˜µ≤≥÷«æ…¬˚∆˙©ƒ∂ßåœ∑´®†¥¨ˆøπ“‘¡™£¢∞§¶•ªº–≠~<>';":|{}]/;
  return specialChars.test(str);
}

// Random word is generated randomly from wordsArray
word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
let attempts = 0;
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
// The game loop
while (attempts < 10 && remainingLetters > 0) {
  // Show the player their progress
  console.log(answerArray.join(" "));
  // Get a guess from the player
  const prompt = require("prompt-sync")({ sigint: true });
  const guess = prompt("\nEnter a letter please: ").toLowerCase();
  if (guess === null) {
    continue;
  } else if (!isNaN(guess)) {
    console.log("\nNo Numbers please! Only Letters." + "\nTry Again.");
    continue;
  } else if (guess.length !== 1) {
    console.log("\nPlease enter a single letter.");
  } else if (containsSpecialChars(guess)) {
    console.log("No special characters! only letters please." + "\nTry again.");
    continue;
  } else {
    // Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
      if (guess === word[j]) {
        if (answerArray[j] === guess) {
          attempts--;
          console.log("You already guessed that letter.");
          break;
        } else {
          answerArray[j] = guess;
          remainingLetters--;
          if (remainingLetters === 0) {
            console.log("You Won!! The word is -->  " + answerArray.join(" "));
          }
          continue;
        }
      }
    }
    for (let m = 0; m < word.length; m++) {
      if (guess !== word[m]) {
        attempts++;
        if (attempts === 10) {
          console.log("You lost!");
        }
        break;
      }
    }
  }
}
