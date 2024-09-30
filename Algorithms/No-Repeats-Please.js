/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
*/

function permAlone(str) {
   
    function permuteAloneRec(arr){
        if(arr.length === 1){
            return [arr]
        }
        const perms = [];
        for(let i = 0; i < arr.length; i++){
            const curEl = arr[i];
            const otherArr = arr.slice(0, i).concat(arr.slice(i + 1))
            const recursivePermutations = permuteAloneRec(otherArr);
            for (let perm of recursivePermutations){
                if(perm[0] === curEl){
                    continue;
                }
                perms.push([curEl].concat(perm));
            }
        }
        return perms;
        
    }
    const result = permuteAloneRec(str.split(''));
    return result.length;
  }
  
  permAlone('aab');