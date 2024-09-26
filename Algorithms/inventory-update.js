/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
*/

function updateInventory(arr1, arr2) {
  arr2.forEach((newEl) => {
    const index = arr1.findIndex((curEl) => curEl[1] === newEl[1]);
    if (index === -1) {
      arr1.push(newEl);
    } else {
      arr1[index][0] += newEl[0];
    }
  });
  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

const assert = require("assert");
const result = updateInventory(curInv, newInv);
assert.equal(result.length, 6);
