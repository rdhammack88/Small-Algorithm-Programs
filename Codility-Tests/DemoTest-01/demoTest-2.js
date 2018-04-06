// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var error = "Please add values to the array";
    var min = Math.min.apply(null, A);
    var max = Math.max.apply(null, A);
    var missing = [];
    
    if(!A.length) {
        return error;
    }
    
    if(Math.max.apply(null, A) === -1) {
        return 1;
    }
    
    for(var i = 1; i < max; i++) {
        if(!A.includes(i)) {
            missing.push(i);
            return i;
        } else {
            continue;
        }
    }
    
    if(missing.length) {
        return Math.min.apply(null, missing);
    } else {
        return max + 1;
    }
}

var arr = [1,3,6,4,1,2];
var minMissing = solution(arr);
// console.log(minMissing);