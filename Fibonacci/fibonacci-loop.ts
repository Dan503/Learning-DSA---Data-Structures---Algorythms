// O(n)
export function fibonacciLoop(numberOfItems: number): Array<number> {
	const result: Array<number> = []
	const first2Numbers = [0, 1]
	for (let i = 0; i < numberOfItems; i++) {
		const newNumber =
			i > first2Numbers.length - 1
				? result[i - 1] + result[i - 2]
				: first2Numbers[i]
		result.push(newNumber)
	}
	return result
}
