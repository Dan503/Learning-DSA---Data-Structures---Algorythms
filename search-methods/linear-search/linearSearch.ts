/**
 * `O(n)`
 *
 * **== Rules for using linearIndexSearch ==**
 * - Basic all purpose search algorithm
 * - The `.find()` method on JS arrays uses linear search
 * - Works on unsorted arrays
 * - Slow compared to binary search however binary requires array to already be sorted
 */
export function linearIndexSearch(array: Array<number>, value: number) {
	for (let index = 0; index < array.length; index++) {
		const item = array[index]
		if (item === value) {
			return index
		}
	}
	return -1
}
