const divideOrHasSeven = (start, end) => {
  let counter = 0;

  /* A function that isolates the unit's place of a number and checks
     if it equals 7. It Returns False when the divided number equals 0;
  */
  function hasSeven(notDividedBy7) {
    let cheker = notDividedBy7;
    while (cheker !== 0 && cheker % 10 !== 7) {
      cheker = Math.floor(cheker / 10);
    }
    return cheker;
  }
  for (let i = start; i <= end; i += 1) {
    if (i % 7 === 0 || hasSeven(i)) {
      counter += 1;
    }
  }
  return counter;
};
