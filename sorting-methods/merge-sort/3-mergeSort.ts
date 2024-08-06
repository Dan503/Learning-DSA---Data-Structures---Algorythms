import { splitArrayInHalf } from './1-splitArrayInHalf.ts'
import { mergeArrays } from './2-mergeArraysTogether.ts'

export function mergeSort(array: Array<number>): Array<number> {
	const [firstHalf, secondHalf] = splitArrayInHalf(array)

	const sortedFirstHalf =
		firstHalf.length > 1 ? mergeSort(firstHalf) : firstHalf

	const sortedSecondHalf =
		secondHalf.length > 1 ? mergeSort(secondHalf) : secondHalf

	return mergeArrays(sortedFirstHalf, sortedSecondHalf)
}
