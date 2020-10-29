function add (...args) {
	return args[0] + args[1];
}

function subtract (...args) {
	return args[0] + args[1];
}

function sum (...args) {
	let sumOfAll = 0;
	args.forEach(element=> {
		sumOfAll += element;
	});
	return sumOfAll;
}

function multiply (...args) {
	return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
}

function power(...args) {
	return Math.pow(args[0], args[1]);
}

function factorial(num) {
	if (num === 0) {
		return 1;
	} else {
		let fact = 1;
		for (let i = 1; i <= num; num++) {
			fact *= i;
		}
	}
	return fact
}

function recursiveFactorial() {
	if (n===0) return 1;
	return n * recursiveFactorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}