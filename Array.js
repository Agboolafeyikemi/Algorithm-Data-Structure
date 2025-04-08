// Question 1
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

// Question 2:  Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.
Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
Output: [1, 2, 2, 3, 5, 6];
Input: (nums1 = [1]), (m = 1), (nums2 = []), (n = 0);
Output: [1];
Input: (nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);
Output: [1];
// Solution :
var merge = function (nums1, m, nums2, n) {
  let negative = -n;
  nums1.splice(negative, n, ...nums2);

  return nums1.sort((a, b) => a - b);
};
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); //[-1,0,0,1,2,2,3,3,3]
console.log(merge([1, 0], 1, [2], 1)); //[1,2]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]

// Question: Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

Input: nums = [3, 1, 2, 4];
Output: [2, 4, 3, 1];
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2;
Input: nums = [0];
Output: [0];

// Solution
var sortArrayByParity = function (nums) {
  let newA = nums.filter((num) => num % 2 !== 0);
  let i = 0;
  let count = 0;

  while (i < nums.length) {
    if (nums[i] % 2 !== 0) {
      let num = nums.splice(i, 1);
      nums.push(...num);
      count++;
      if (newA.length === count) {
        return nums;
      }
    } else {
      i++;
    }
  }
  return nums;
};

// Question:Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]
