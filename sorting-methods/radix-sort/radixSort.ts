import { moveIntoNumberBuckets } from './1-moveIntoNumberBuckets.ts'
import { unpackNumberBuckets } from './2-unpackNumberBuckets.ts'

const unsortedArray = [566, 574, 399, 379, 338, 510, 72, 350, 1, 215]
const sorted = radixSort(unsortedArray)

console.log({ sorted })

/**
 * Best case scenario:  `O(n.k)` - low k, high n
 *
 * Average scenario: `O(n.log n)` - medium k, medium n
 *
 * Worst case: `O(n^2)` - high k, low n
 *
 * **== Rules for using radixSort ==**
 *
 * - **Best used for:**
 *   Where `n` (Number of values in the array) has a _larger_ number of digits than the number of digits in the highest value found in the array
 *   eg. if there are 1 million numbers in the array (`n = 1,000,000`) with the largest number in the array having only 4 digits (eg. `largestValue = 1,025`), that is a good use case for Radix sort. In this scenario `k = 4`.
 *
 * - Integer values only (no decimals)
 *   All decimals are dropped when evaluating numbers
 *
 * - Positive values only
 *   negative values will not be assessed correctly
 */

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
