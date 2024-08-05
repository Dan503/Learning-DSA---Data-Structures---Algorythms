import { moveIntoNumberBuckets } from './1-moveIntoNumberBuckets.ts'
import { unpackNumberBuckets } from './2-unpackNumberBuckets.ts'

const unsortedArray = [566, 574, 399, 379, 338, 510, 72, 350, 1, 215]
const sorted = radixSort(unsortedArray)

console.log({ sorted })

// best case scenario:  O(n.k)
// an average scenario: O (n.log n)
// worst case scenario: O(n^2)
export function radixSort(array: Array<number>): Array<number> {
	let numberLookUp = 1
	// O(n)
	const maxNumber: number = Math.max(...array)

	let sortedArray: Array<number> = array

	// O(k)
	while (Math.floor(maxNumber / numberLookUp) > 0) {
		// O(n)
		const numberBuckets = moveIntoNumberBuckets(sortedArray, numberLookUp)
		// O(n)
		sortedArray = unpackNumberBuckets(numberBuckets)

		numberLookUp *= 10
	}

	return sortedArray
}

/**
 * == Rules for using radixSort ==
 *
 * - Best used for:
 *   Number of values has a number of digits greater than the number of digits in the highest value in the array
 *   eg. if there are 1 million numbers in the array with the largest number in the array having only 4 digits, that is a good use case for Radix sort.
 *
 * - Integer values only (no decimals)
 *   All decimals are dropped when evaluating numbers
 *
 * - Positive values only
 *   negative values will not be assessed correctly
 */
