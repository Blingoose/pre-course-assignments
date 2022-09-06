const biggestNumber = (a, b, c) => {
  const arr = [a, b, c];
  arr.sort(function compareFunc(x, y) {
    return x - y;
  });
  return arr[arr.length - 1];
};
/* Notes for me: 
   sorting with compareFunc to avoid wrong numeric order.
   Default .sort() converts numbers to string and produces wrong
   order if not taken care of. 
   compareFunc Rules:
   if x-y < 0, it means x comes before y.
   if x-y > 0, it means x comes after y.
   if x === y, keep in place.
*/
