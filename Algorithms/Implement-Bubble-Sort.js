/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort
*/

function bubbleSort(arr) {
  let n = arr.length;
  do {
    let newN = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        newN = i;
      }
    }
    n = newN;
  } while (n > 1);

  return arr;
}

const originalSort = Array.prototype.sort;
Array.prototype.sort = function () {
  throw new Error("Do not use the built-in .sort() method");
};
try {
  bubbleSort([3, 2, 1]);
} catch (e) {
  console.assert(
    e.message === "Do not use the built-in .sort() method",
    "bubbleSort should not use the built-in .sort() method"
  );
}
Array.prototype.sort = originalSort;

console.assert(
  typeof bubbleSort === "function",
  "bubbleSort should be a function"
);
console.assert(
  Array.isArray(bubbleSort([1, 2, 3])),
  "bubbleSort should return an array"
);
console.assert(
  bubbleSort([1, 2, 3]).length === 3,
  "bubbleSort should return an array of the same length"
);

console.assert(
  JSON.stringify(bubbleSort([1, 2, 3])) === JSON.stringify([1, 2, 3]),
  "bubbleSort should return a sorted array"
);
console.assert(
  JSON.stringify(bubbleSort([3, 2, 1])) === JSON.stringify([1, 2, 3]),
  "bubbleSort should return a sorted array"
);
console.assert(
  JSON.stringify(bubbleSort([5, 3, 8, 4, 2])) ===
    JSON.stringify([2, 3, 4, 5, 8]),
  "bubbleSort should return a sorted array"
);
