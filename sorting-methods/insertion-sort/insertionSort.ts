import { swapArrayValues } from '../../utils/utils.ts'

// O(n) x O(n) = O(n^2)
export function insertionSort(array: Array<number>): Array<number> {
	// O(n)
	for (let index = 0; index < array.length; index++) {
		// O(n)
		shiftIfPrevLarger(array, index)
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

// insertionSortSinglePass([7, 12, 9, 11, 3], 0)

shiftIfPrevLarger([12, 7, 9, 11, 3], 2)
