export default function randomInteger(minimum, maximum) {
	if (maximum === undefined) {
		maximum = minimum;
		minimum = 0;
	}

	if (typeof minimum !== 'number' || typeof maximum !== 'number') {
		throw new TypeError('Expected all arguments to be numbers');
	}

	const actualMinimum = Math.min(minimum, maximum);
	const actualMaximum = Math.max(minimum, maximum);

	return Math.floor(
		(Math.random() * (actualMaximum - actualMinimum + 1)) + actualMinimum
	);
}
