/**
 * `O(log n)` speed, much faster than linear search
 *
 * **== Rules for using binaryIndexSearch ==**
 * - Array **MUST** already be sorted
 * - Immensely faster than linear search
 * - Worst case scenario is that the value is not found, it still has a speed of O(log n) in this case
 */
export function binaryIndexSearch(
	preSortedArray: Array<number>,
	targetValue: number,
	{
		minIndex = 0,
		maxIndex = preSortedArray.length - 1,
		indexesUsed = {} as IndexesUsedCollection,
	} = {},
): number {
	const searchIndex = minIndex + Math.floor((maxIndex - minIndex) / 2)
	const foundValue = preSortedArray[searchIndex]

	if (foundValue === targetValue) {
		return searchIndex
	}

	if (indexesUsed[searchIndex]) {
		return -1
	}

	indexesUsed[searchIndex] = true

	if (foundValue < targetValue) {
		return binaryIndexSearch(preSortedArray, targetValue, {
			minIndex: searchIndex,
			maxIndex,
			indexesUsed,
		})
	}

	if (foundValue > targetValue) {
		return binaryIndexSearch(preSortedArray, targetValue, {
			minIndex,
			maxIndex: searchIndex,
			indexesUsed,
		})
	}

	return -1
}

type IndexesUsedCollection = Record<number, boolean>
