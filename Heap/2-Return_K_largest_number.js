/* 

Question: Write an efficient program for printing k largest elements in an array. Elements in array can be in any order.
For example, if given array is [1, 23, 12, 9, 30, 2, 50] and you are asked for the largest 3 elements i.e., k = 3 then your program should print 50, 30 and 23.

*/

const { MinHeap } = require("@datastructures-js/heap");

function Return_K_largest_number(arr, K) {
  const minHeap = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
    if (minHeap.size() > K) {
      minHeap.extractRoot();
    }
  }

  return minHeap;
}

console.log(Return_K_largest_number([1, 23, 12, 9, 30, 2, 50], 3));

console.log(Return_K_largest_number([1, 23, 12, 9, 30, 2, 50], 4));
