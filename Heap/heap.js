const { MinHeap, MaxHeap } = require("@datastructures-js/heap");

const numList = [
  50,
  80,
  { key: 30, value: "something" },
  90,
  { key: 60, value: null },
  40,
  { key: 20, value: { name: "test" } },
];

const strList = [
  "m",
  "x",
  { key: "f", value: "something" },
  "b",
  { key: "z", value: null },
  "k",
  { key: "c", value: { name: "test" } },
];

const minHeap = MinHeap.heapify(numList);

const maxHeap = MaxHeap.heapify(strList);

console.log(minHeap, maxHeap);
