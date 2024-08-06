import { splitArrayInHalf } from './1-splitArrayInHalf.ts'
import { mergeArrays } from './2-mergeArraysTogether.ts'

/**
 * Always: `O(n.log n)`
 *
 * **== Rules for using mergeSort ==**
 * - A good general all-purpose sorting algorithm with high efficiency
 * - Always `O(n.log n)` under all circumstances
 * - If you don't know what else to use, use this
 * - The one downside being that it is somewhat complicated with the merge steps
 * - Does not mutate the original array, it returns a copy
 */
export function mergeSort(array: Array<number>): Array<number> {
	const [firstHalf, secondHalf] = splitArrayInHalf(array)

	// O(log n)
	const sortedFirstHalf =
		firstHalf.length > 1 ? mergeSort(firstHalf) : firstHalf
	const sortedSecondHalf =
		secondHalf.length > 1 ? mergeSort(secondHalf) : secondHalf

	// O(n)
	return mergeArrays(sortedFirstHalf, sortedSecondHalf)
}
