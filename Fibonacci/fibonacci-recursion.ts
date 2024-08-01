export function fibonacciRecursion(
	numberOfItems: number,
	sequence: Array<number> = [0, 1],
	prev1: number = sequence[0],
	prev2: number = sequence[1],
): Array<number> {
	const newValue = prev1 + prev2
	sequence.push(newValue)

	if (numberOfItems > sequence.length) {
		fibonacciRecursion(numberOfItems, sequence, prev2, newValue)
	}

	return sequence
}
