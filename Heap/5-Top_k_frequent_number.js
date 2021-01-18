/* 

Given an array of n numbers and a positive integer k. The problem is to find k numbers with most occurrences, i.e., the top k numbers having the maximum frequency. If two numbers have the same frequency then the larger number should be given preference. The numbers should be displayed in decreasing order of their frequencies. It is assumed that the array consists of k numbers with most occurrences.

Examples: 

Input: 
arr[] = {3, 1, 4, 4, 5, 2, 6, 1}, 
k = 2
Output: 4 1
Explanation:
Frequency of 4 = 2
Frequency of 1 = 2
These two have the maximum frequency and
4 is larger than 1.

Input : 
arr[] = {7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9},
k = 4
Output: 5 11 7 10
Explanation: 
Frequency of 5 = 3
Frequency of 11 = 2
Frequency of 7 = 2
Frequency of 10 = 1
These four have the maximum frequency and
5 is largest among rest.


*/

const { MinHeap } = require("@datastructures-js/heap");

function top_k_frequent_number(arr, K) {
  const freqObj = {};
  const minHeap = new MinHeap();
  for (let i = 0; i < arr.length; i++) {
    if (freqObj[arr[i]]) {
      freqObj[arr[i]]++;
    } else {
      freqObj[arr[i]] = 1;
    }
  }

  for (const num in freqObj) {
    minHeap.insert(freqObj[num], num);
    if (minHeap.size() > K) {
      minHeap.extractRoot();
    }
  }

  while (minHeap.size() > 0) {
    console.log(minHeap.extractRoot()._value);
  }
}

// console.log(top_k_frequent_number([7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 2));
top_k_frequent_number([1, 1, 1, 3, 2, 2, 4], 2);
