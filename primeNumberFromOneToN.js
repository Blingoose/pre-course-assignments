const primeNumberFromOneToN = (n) => {
  let countPrimes = 0;
  let countDividers = 0;
  for (let i = 2; i <= n; i += 1) {
    countDividers = 0;
    for (let j = 1; j <= n; j += 1) {
      if (i % j === 0) {
        countDividers += 1;
      }
    }
    if (countDividers === 2) {
      countPrimes += 1;
    }
  }
  return countPrimes;
};
