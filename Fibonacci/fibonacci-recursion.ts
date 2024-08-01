export function fibonacciRecursion(
	numberOfItems: number,
	// currentIndex: number,
	currentValue: Array<number> = [0, 1],
	previous2Values: [number, number] = [0, 1],
): Array<number> {
	const newValue = previous2Values[0] + previous2Values[1]
	currentValue.push(newValue)
	if (numberOfItems > currentValue.length) {
		fibonacciRecursion(numberOfItems, currentValue, [
			previous2Values[1],
			newValue,
		])
	}

	return currentValue
}
