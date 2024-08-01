// O(n)
export function fibonacciLoop(numberOfItems: number): Array<number> {
	let prev1 = 0
	let prev2 = 1
	const result: Array<number> = [prev1, prev2]

	for (let i = result.length; i < numberOfItems; i++) {
		const newNumber = prev1 + prev2
		result.push(newNumber)
		prev1 = prev2
		prev2 = newNumber
	}
	return result
}
