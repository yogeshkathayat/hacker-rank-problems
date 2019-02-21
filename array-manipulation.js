//Array Manipulation
// Starting with a 1-indexed array of zeros and a list of operations,
//  for each operation add a value to each of the array element between two given indices, inclusive. 
// Once all operations have been performed, return the maximum value in your array.
// the first line contains two space-separated integers m and n,
//  the size of the array and the number of operations. 
// Each of the next m lines contains three space-separated integers a , b 
// and k , the left index, right index and summand.
//===input====
// 5 3
// 1 2 100
// 2 5 100
// 3 4 100

//===output====
//200


function arrayManipulation(n, queries) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(0);
    }

    for (let query of queries) {
        let firstIndex = query[0];
        let secondIndex = query[1];
        let numberToAdd = query[2];
        for (let i = firstIndex; i <= secondIndex; i++) {
            arr[i] += numberToAdd;
        }

    }

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) max = arr[i];
    }

    return max;

}


//more optimized solution

function arrayManipulation(n, queries) {

    let sumMap = new Map();
    for (let query of queries) {
        let firstIndex = query[0];
        let secondIndex = query[1];
        let numberToAdd = query[2];
        for (let i = firstIndex; i <= secondIndex; i++) {
            let value = sumMap.get(i) || 0;
            value += numberToAdd;
            sumMap.set(i, value);
        }

    }

    let highest = 0;
    for (var [key, value] of sumMap) {
        if (value >= highest) highest = value;
    }

    return highest;


}

