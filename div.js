function division(firstNumber, secondNumber) {
	let div = (firstNumber/secondNumber);
	if (isNaN(div)) {
		console.log('division result is not integer number');
		process.exit(1);
	}
	return (firstNumber/secondNumber);
	
}

module.exports = {
	division
};