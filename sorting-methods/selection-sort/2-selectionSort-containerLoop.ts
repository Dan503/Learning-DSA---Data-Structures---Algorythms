import { selectionSortSinglePass } from './1-selectionSort-SinglePass.ts'

// O(n^2) * O(n) = O(n.n^2)
export function selectionSort(array: Array<number>): Array<number> {
	// O(n)
	for (let index = 0; index < array.length; index++) {
		// O(n^2)
		selectionSortSinglePass(array, index)
	}
	return array
}

selectionSort([7, 12, 9, 11, 3])
