import { selectionSortSinglePass } from './1-selectionSort-SinglePass.ts'

/**
 * `O(n/2) * O(n)` = `O(n^2)` (The n/2 get simplified down to n in the final equation, Big O doesn't care about most constants)
 *
 * **== Rules for using selectionSort ==**
 *
 * - Another sorting algorithm with bad efficiency.
 * - This algorithm is even worse than bubbleSort. bubbleSort is able to get as low as O(n) under the right conditions. selectionSort is consistently `O(n^2)` no matter what.
 * - **DO NOT USE!**
 */
export function selectionSort(array: Array<number>): Array<number> {
	// O(n)
	for (let index = 0; index < array.length; index++) {
		// O(n/2)
		selectionSortSinglePass(array, index)
	}
	return array
}

selectionSort([7, 12, 9, 11, 3])
