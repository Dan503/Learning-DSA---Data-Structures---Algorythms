// O(n^2)
export function unpackCountingArray(countingArray: Array<number | undefined>) {
	const sortedArray: Array<number> = []

	// O(n)
	for (let value = 0; value < countingArray.length; value++) {
		const numberOfCopies = countingArray[value]
		if (!numberOfCopies) {
			continue
		}

		// O(n)
		for (let i = 0; i < numberOfCopies; i++) {
			sortedArray.push(value)
		}
	}

	return sortedArray
}
