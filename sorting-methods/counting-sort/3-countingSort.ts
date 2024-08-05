import { gatherIntoCountingArray } from './1-gather-into-counting-array.ts'
import { unpackCountingArray } from './2-unpack-counting-array.ts'

const countingSortResult = countingSort([4, 1, 3, 4, 3, 4, 1, 3, 3, 4, 3, 3])

console.log({ countingSortResult })

// Fast when the range of possible values (k) is smaller than the number of values (n)
// O(n) x O(n.k) = O(n.k)
export function countingSort(array: Array<number>) {
	// O(n)
	const countingArray = gatherIntoCountingArray(array)
	// [, 2, , 6, 4]
	// O(n.k)
	const sortedArray: Array<number> = unpackCountingArray(countingArray)

	return sortedArray
}

/**
 * == Rules for using countingSort ==
 *
 * - Integer values only (no decimals)
 *   values are assigned to array indices so the value must be numeric
 *
 * - Positive values only
 *   A index of -3 is considered outside of an array and so it will not be stored
 *
 * - Limited range of values
 *   When the range of values (k) is larger than the number of values (n), the algorithm is slow and inefficient
 */

//
