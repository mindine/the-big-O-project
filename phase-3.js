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
        // Sum of this entire increment
        let sum = 0;

        // Keep track of calculations
        const memo = {};

        // Value we use to start the inner loop (j = key)
        let key = memo[i];

        // If first iteration, memo is empty. Use i instead
        if (!key) {
            key = i;
        }

        for (let j = key; j <= i; j++) {
            // Sum of the uncalculated values
            const currentSum = addNums(i);

            // Stored sum of the last calculation performed
            const lastSum = memo[key - increment];

            // If first iteration, lastSum is undefined, so only add currentSum
            if (lastSum) {
                sum += currentSum + lastSum;
            } else {
                sum += currentSum;
            }

            // Store the latest calculation
            memo[key] = currentSum;
        }

        arr.push(sum);
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