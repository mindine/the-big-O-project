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




function _addManyNums10(increment) {
    let arr = [];

    for (let i = increment; i <= increment * 10; i += increment) {
        let sum = 0;
        const memoIds = [];
        const memoVals = [];

        let curMemoId = memoIds[memoIds.length - 1];
        if (curMemoId === undefined) {
            curMemoId = i;
        }

        for (let j = curMemoId; j <= i; j++) {
            const res = addNums(i);
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
    }

    return arr;
}

_addManyNums10(10);

module.exports = [addNums10, addManyNums10];