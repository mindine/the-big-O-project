const [addNums, addManyNums] = require("./phase-1");

// Define Big-O
// "Number of operations an algorithm will make"
// O(n)
function addNums10Timing(increment) {
    // Then, add timing code
    let arr = [];

    for (let i = increment; i <= increment * 10; i += increment) {
        const start = Date.now();

        const res = addNums(i);
        arr.push(res);

        const end = Date.now();
        console.log(end - start);
    }

    return arr;
}

// O(n)
function addNums100Timing(increment) {
    // Then, add timing code
    let arr = [];

    for (let i = increment; i <= increment * 100; i += increment) {
        const start = Date.now();

        const res = addNums(i);
        arr.push(res);

        const end = Date.now();
        console.log(end - start);
    }

    return arr;
}

// O(n^2)
function addManyNums10Timing(increment) {
    // Then, add timing code
    let arr = [];

    for (let i = increment; i <= increment * 10; i += increment) {
        const start = Date.now();

        const res = addManyNums(i);
        arr.push(res);

        const end = Date.now();
        console.log(end - start);
    }

    return arr;
}

// O(n^2)
function addManyNums100Timing(increment) {
    // Then, add timing code
    let arr = [];

    for (let i = increment; i <= increment * 100; i += increment) {
        const start = Date.now();

        const res = addManyNums(i);
        arr.push(res);

        const end = Date.now();
        console.log(end - start);
    }

    return arr;
}

// More efficient
// O(1)
function _addManyNums10Timing(increment) {
    let arr = [];

    for (let i = increment; i <= increment * 10; i += increment) {
        //const start = Date.now();

        let sum = 0;
        const memoIds = [];
        const memoVals = [];

        let curMemoId = memoIds[memoIds.length - 1];
        if (curMemoId === undefined) {
            curMemoId = i;
        }

        for (let j = curMemoId; j <= i; j++) {
            const res = addNums(i);  
            console.log(curMemoId, '=', res);
            memoIds.push(i);

            const memoVal = memoVals[memoVals.length - 1];

            if (memoVal !== undefined) {
                sum += res + memoVal;
            } else {
                sum += res;
            }

            memoVals.push(res);
        }

        arr.push(sum);

        //const end = Date.now();
        //console.log(end - start);
    }

    return arr;
}


// n = 1000000;
// console.log(`addNums(${n}): `);
// addNums100Timing(1000000);




n = 1000;
console.log(`addManyNums(${n}): `);
const res = _addManyNums10Timing(5000);
console.log('Result:', res);

// console.log("\n***********\n");
// console.log(`addManyNums(${n}): `);
// const res2 = addManyNums10Timing(5000);
// console.log('Result:', res);