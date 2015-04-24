exports.fizzbuzz = fizzbuzz;
exports.divisibleBy = divisibleBy;

function fizzbuzz(n) {
	if (n < 1) {
		throw new Error("Not defined for n < 1");
	}
	if (divisibleBy3(n) && divisibleBy5(n)) {
		return 'FizzBuzz';
	}
	if (divisibleBy3(n)) {
		return 'Fizz';
	}
	if (divisibleBy5(n)) {
		return 'Buzz';
	}
	return String(n);
}

var divisibleBy3 = divisibleBy(3);
var divisibleBy5 = divisibleBy(5);

function divisibleBy(divisor) {
	return function(n) {
		return n % divisor === 0;
	}
}

// Only execute this when running directly on the console
if (require.main === module) {
	for (var n = 1; n <= 100; ++n) {
		console.log(fizzbuzz(n));
	}
}