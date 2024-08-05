import { swapArrayValues } from '../../utils/utils.ts'

/**
 * `O(n) x O(n)` = `O(n^2)`
 * - best case scenario: already sorted correctly = `O(n)`
 * - worst case scenario: already sorted... in the reverse order = `O(n^2)`
 *
 * **== Rules for using insertionSort ==**
 * - **Best used for:** The values are already mostly sorted correctly and only need minor corrections
 */
export function insertionSort(array: Array<number>): Array<number> {
	// O(n)
	for (let index = 0; index < array.length; index++) {
		// O(n)
		shiftIfPrevLarger(array, index)
		//1    [7, 12],  9,    11,   3 // 7 < 12 ? yes, stop

		//2     7, [12, <9>],  11,   3 // 12 < 9 ? no, SWAP
		//-2a  [7, <9>], 12,   11,   3 // 7 < 9 ? yes, stop

		//3     7,  9,  [12,  <11>], 3 // 12 < 11 ? no, SWAP
		//-3a   7, [9,  <11>], 12,   3 // 11 < 9 ? yes, stop

		//4     7,  9,   11,  [12,  <3>] // 12 < 3 ? no, SWAP
		//-4a   7,  9,  [11,  <3>], 12 // 11 < 3 ? no, SWAP
		//-4b   7, [9,  <3>], 11,   12 // 9 < 3 ? no, SWAP
		//-4c  [7, <3>], 9,   11,   12 // 7 < 3 ? no, SWAP
		//-4d  <3>, 7,   9,   11,   12 // no more items to swap with
	}
	return array
}
// O(n)
export function shiftIfPrevLarger(array: Array<number>, postIndex: number) {
	const prevIndex = postIndex - 1
	const prevValue = array[prevIndex]
	const postValue = array[postIndex]
	if (prevValue > postValue) {
		swapArrayValues(array, prevIndex, postIndex)
		shiftIfPrevLarger(array, prevIndex)
	}
}

insertionSort([7, 12, 9, 11, 3])
