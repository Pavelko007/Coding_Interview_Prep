/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
*/

function sym(args) {
    const arrays = Array.prototype.slice.call(arguments);
    const symmetricDifference = (arr1, arr2) => {
        return arr1
            .filter(x => !arr2.includes(x))
            .concat(arr2.filter(x => !arr1.includes(x)));
    };

    const result = arrays.reduce(symmetricDifference);
    return [...new Set(result)];
  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));