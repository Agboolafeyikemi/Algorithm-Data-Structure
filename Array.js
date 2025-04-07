// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place and do not return anything
// Example 1:
Input: arr = [1, 0, 2, 3, 0, 4, 5, 0];
Output: [1, 0, 0, 2, 3, 0, 0, 4];
Solution;
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i + 1, 0, 0);

      arr.splice(-1, 1);

      i = i + 1;
    }
  }

  return arr;
};
console.log(duplicatesZeros([1, 0, 2, 3, 0, 4, 5, 0])); //[0,0,4,1,0,0,0,0,8][1,0,0,2,3,0,0,4]
