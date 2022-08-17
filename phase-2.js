const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
    let arr = [];

    for (let i = increment; i <= increment * 10; i += increment) {
        const res = addNums(i);
        arr.push(res);
    }

    return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    let arr = [];

    for (let i = increment; i <= increment * 10; i += increment) {
        const res = addManyNums(i);
        arr.push(res);
    }

    return arr;
}

module.exports = [addNums10, addManyNums10];