const removeFromArray = function(...args) {
    let paramArray = args[0];
    let newArray = [];
    paramArray.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

module.exports = removeFromArray
