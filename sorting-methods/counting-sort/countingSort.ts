import { gatherIntoCountingArray } from './1-gather-into-counting-array.ts'
import { unpackCountingArray } from './2-unpack-counting-array.ts'

const countingSortResult = countingSort([4, 1, 3, 9, 3, 4, 1, 9, 3, 9])

console.log({ countingSortResult })

// O(n) x O(n^2) = O(n^3)
export function countingSort(array: Array<number>) {
	// O(n)
	const countingArray = gatherIntoCountingArray(array)
	// O(n^2)
	const sortedArray: Array<number> = unpackCountingArray(countingArray)

	return sortedArray
}
