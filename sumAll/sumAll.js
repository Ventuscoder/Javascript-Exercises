const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    let num = 0;
    for (let i = 1; i <= end; i++) {
        num += i;
    }
    return num;
}

module.exports = sumAll
