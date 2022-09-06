const numFactorial = (num) => {
  let factorialAnswer = 1;
  if (num >= 0) {
    for (let i = num; i > 1; i -= 1) {
      factorialAnswer *= i;
    }
    return factorialAnswer;
  }
  return "There's no negative factorial!";
};
