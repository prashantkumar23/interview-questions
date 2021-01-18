/* 

Given an array and a number k where k is smaller than size of array, 
we need to find the k’th smallest element in the given array.
It is given that all array elements are distinct.

Examples:
    Input: arr[] = {7, 10, 4, 3, 20, 15}
    k = 3
    Output: 7

    Input: arr[] = {7, 10, 4, 3, 20, 15}
    k = 4
    Output: 10 

*/

const { MaxHeap } = require("@datastructures-js/heap");

function Kth_Smallest_Element(arr, K) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(arr[i]);
    if (maxHeap.size() > K) {
      maxHeap.extractRoot();
    }
  }

  return maxHeap.root()._key;
}

console.log(Kth_Smallest_Element([7, 10, 4, 3, 20, 15], 3));

console.log(Kth_Smallest_Element([7, 10, 4, 3, 20, 15], 4));
