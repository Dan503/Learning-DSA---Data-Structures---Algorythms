import { bubbleSortSinglePass } from './0-bubbleSort-singlePass.ts'

/**
 * Best case = `O(n)` (an already sorted array)
 * Most cases = `O(n^2)`
 *
 * **== Rules for using bubbleSort ==**
 * - **Best used for:** If there are not many values that need sorting and there are no better options.
 * - This is a simple though inefficient algorithm, do not use bubble sort if you can avoid it.
 */
export function bubbleSort(array: Array<number>) {
	// O(n)
	for (let index = 0; index < array.length; index++) {
		// O(n)
		bubbleSortSinglePass(array, array.length - index - 1)
	}
	return array
}
