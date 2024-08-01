const sequence = [0, 1]

export function fibonacciRecursion(
	numberOfItems: number,
	prev1: number = sequence[0],
	prev2: number = sequence[1],
): Array<number> {
	const newValue = prev1 + prev2
	sequence.push(newValue)

	if (numberOfItems > sequence.length) {
		fibonacciRecursion(numberOfItems, prev2, newValue)
	}

	return sequence
}
