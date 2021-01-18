/* 

Given a list of n points on 2D plane, the task is to find the K (k < n) closest points to the origin O(0, 0). 
Note: The distance between a point P(x, y) and O(0, 0) using the standard Euclidean Distance. 
Examples:

Input: [(1, 0), (2, 1), (3, 6), (-5, 2), (1, -4)], K = 3 
Output: [(1, 0), (2, 1), (1, -4)] 
Explanation: 
Square of Distances of points from origin are 
(1, 0) : 1 
(2, 1) : 5 
(3, 6) : 45 
(-5, 2) : 29 
(1, -4) : 17 
Hence for K = 3, the closest 3 points are (1, 0), (2, 1) & (1, -4).

Input: [(1, 3), (-2, 2)], K = 1 
Output: [(-2, 2)] 
Explanation: 
Square of Distances of points from origin are 
(1, 3) : 10 
(-2, 2) : 8 
Hence for K = 1, the closest point is (-2, 2).

*/

const { MaxHeap } = require("@datastructures-js/heap");

function K_Closet_point_to_origin(arr, K) {
  const maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(Math.sqrt(arr[i][0] + arr[i][1]), arr[i]);
    if (maxHeap.size() > K) {
      maxHeap.extractRoot();
    }
  }

  while (maxHeap.size() > 0) {
    console.log(maxHeap.extractRoot()._value);
  }
}

K_Closet_point_to_origin(
  [
    [1, 3],
    [-2, 2],
    [5, 8],
    [0, 1],
  ],
  2
);

K_Closet_point_to_origin(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2
);
