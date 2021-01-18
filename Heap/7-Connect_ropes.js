/* 

There are given N ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two ropes is equal to sum of their lengths. The task is to connect the ropes with minimum cost.

Example 1:

Input:
n = 4
arr[] = {4, 3, 2, 6}
Output: 
29

Example 2:

Input:
n = 5
arr[] = {4, 2, 7, 6, 9}
Output: 
62

*/

const { MinHeap } = require("@datastructures-js/heap");

function Connect_ropes(arr) {
  let cost = 0;
  const minHeap = new MinHeap(arr);

  while (minHeap.size() >= 2) {
    const first = minHeap.extractRoot();
    console.log(first);
    const second = minHeap.extractRoot();

    cost += first + second;
    minHeap.insert(first + second);
  }

  return cost;
}

console.log(Connect_ropes([1, 2, 3, 4, 5]));
