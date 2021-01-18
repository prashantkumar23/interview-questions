/* 

Given an array of n elements, where each element is at most k away from its target position,
devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2,
an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

Examples:

Input : arr[] = {6, 5, 3, 2, 8, 10, 9}
            k = 3 
Output : arr[] = {2, 3, 5, 6, 8, 9, 10}

Input : arr[] = {10, 9, 8, 7, 4, 70, 60, 50}
         k = 4
Output : arr[] = {4, 7, 8, 9, 10, 50, 60, 70}


*/
const { MinHeap } = require("@datastructures-js/heap");

function Sort_a_K_Sorted_Array(arr, K) {
  let sortedArr = [];
  const minHeap = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
    if (minHeap.size() > K) {
      const poppedValue = minHeap.extractRoot();
      sortedArr.push(poppedValue.getKey());
    }
  }

  while (minHeap.size() > 0) {
    const key = minHeap.extractRoot();
    sortedArr.push(key.getKey());
  }

  return sortedArr;
}

console.log(Sort_a_K_Sorted_Array([6, 5, 3, 2, 8, 10, 9], 3));
