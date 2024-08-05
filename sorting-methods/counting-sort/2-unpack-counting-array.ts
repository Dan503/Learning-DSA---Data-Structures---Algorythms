// O(k.n)
export function unpackCountingArray(countingArray: Array<number | undefined>) {
	const sortedArray: Array<number> = []

	// countingArray = [
	// 	0, // 0 x 0 added // [ ]
	// 	2, // 2 x 1 added // [ 1, 1 ]
	// 	0, // 0 x 2 added // [ 1, 1 ]
	// 	1, // 1 x 3 added // [ 1, 1, 3 ]
	// 	3, // 3 x 4 added // [ 1, 1, 3, 4, 4, 4 ]
	// ]

	// O(k)
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
