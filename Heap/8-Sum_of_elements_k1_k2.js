/*  

Given an array of integers and two numbers k1 and k2. Find the sum of all elements between given two k1’th and k2’th smallest elements of the array. It may be assumed that (1 <= k1 < k2 <= n) and all elements of array are distinct.
Examples :

Input : arr[] = {20, 8, 22, 4, 12, 10, 14},  k1 = 3,  k2 = 6  
Output : 26          
         3rd smallest element is 10. 6th smallest element 
         is 20. Sum of all element between k1 & k2 is
         12 + 14 = 26

Input : arr[] = {10, 2, 50, 12, 48, 13}, k1 = 2, k2 = 6 
Output : 73 


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

function sum_of_elements_k1_k2(arr, k1, k2) {
  const first = Kth_Smallest_Element(arr, k1);
  const second = Kth_Smallest_Element(arr, k2);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first && arr[i] < second) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sum_of_elements_k1_k2([10, 2, 50, 12, 48, 13], 2, 6));
