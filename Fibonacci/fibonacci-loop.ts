// O(n)
export function fibonacciLoop(numberOfItems: number): Array<number> {
	const result: Array<number> = []
	for (let i = 0; i < numberOfItems; i++) {
		const first3Numbers = [0, 1, 1]
		const newNumber =
			result[i - 1] && result[i - 2]
				? result[i - 1] + result[i - 2]
				: first3Numbers[i]
		result[i] = newNumber
	}
	return result
}
