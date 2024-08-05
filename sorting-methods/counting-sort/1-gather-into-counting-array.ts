// O(n)
export function gatherIntoCountingArray(array: Array<number>): Array<number> {
	const countingArray: Array<number> = []
	array.forEach((number) => {
		countingArray[number] = countingArray[number]
			? countingArray[number] + 1
			: 1
	})

	return countingArray
}
