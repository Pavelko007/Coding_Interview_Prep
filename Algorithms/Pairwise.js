/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
*/

function pairwise(arr, arg) {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] + arr[j] == arg){
                result += i + j;
                arr[i] = arr[j] = NaN;
            }
        }
    }

    return result;
}

console.assert(pairwise([1,4,2,3,0,5], 7) === 11, 'Test failed');