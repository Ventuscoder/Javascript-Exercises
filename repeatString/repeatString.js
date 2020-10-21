const repeatString = function(string, times) {
    if (times < 0) return 'ERROR'
    let newString = '';
    for (let i = 1; i <= times; i++) {
        newString += string;
    }
    return newString;
}

module.exports = repeatString;
