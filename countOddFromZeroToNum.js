const countOddFromZeroToNum = (num) => {
  let countOdd = 0;
  for (let i = 0; i <= num; i += 1) {
    countOdd += i & 1;
  }
  return countOdd;
};
/*  Notes for me:
   'Bitwise AND' converts i to binary representation,
    performs 'Logical AND' on each pair of the LSB 
    (Least Significant Bit) and returns 1 if 
    there's an odd number. Similar to (i % 2 == 1).
    In binary: any Odd number must have 1 as the lease significant bit.
*/
