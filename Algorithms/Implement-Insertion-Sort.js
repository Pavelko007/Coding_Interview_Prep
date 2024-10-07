/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort
*/

function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
        let j = i - 1;
        let key = array[i];

        while(j >= 0 && key < array[j]){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = key;
    }
    return array;
  }

  console.log(insertionSort([5, 4, 33, 2, 8])) // [2, 4, 5, 8, 33]