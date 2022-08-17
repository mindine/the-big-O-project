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


n = 1000000;
console.log(`addNums(${n}): `);
addNums100Timing(1000000);


console.log("\n***********\n");


n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums100Timing(250);