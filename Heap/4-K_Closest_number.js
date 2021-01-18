/* 

Given a sorted array arr[] and a value X, find the k closest elements to X in arr[].
Examples:

Input: K = 4, X = 35
       arr[] = {12, 16, 22, 30, 35, 39, 42, 
               45, 48, 50, 53, 55, 56}
Output: 30 39 42 45

Note that if the element is present in array, then it should not be in output, only the other closest elements are required.

*/

const { MaxHeap } = require("@datastructures-js/heap");

function K_Closest_Number(arr, X, K) {
  const maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(Math.abs(arr[i] - X), arr[i]);
    if (maxHeap.size() > K) {
      maxHeap.extractRoot();
    }
  }
  return maxHeap;
}

console.log(
  K_Closest_Number([12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56], 35, 4)
);

console.log(K_Closest_Number([5, 6, 7, 8, 9], 7, 3));

// Using max-heap in case of 'closest' because we want the smallest abs diff to lie in the end of stack
// so that the greater abs diff can be popped out.
