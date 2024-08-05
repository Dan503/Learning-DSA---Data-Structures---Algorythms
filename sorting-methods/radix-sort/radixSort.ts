import { moveIntoNumberBuckets } from './1-moveIntoNumberBuckets.ts'
import { unpackNumberBuckets } from './2-unpackNumberBuckets.ts'

const unsortedArray = [566, 574, 399, 379, 338, 510, 72, 350, 1, 215]
const sorted = radixSort(unsortedArray, 3)

console.log({ sorted })

export function radixSort(
	array: Array<number>,
	numberOfDigits: number,
): Array<number> {
	let sortedArray: Array<number> = array
	for (let index = numberOfDigits; index > 0; index--) {
		const numberBuckets = moveIntoNumberBuckets(
			sortedArray,
			index,
			numberOfDigits,
		)
		sortedArray = unpackNumberBuckets(numberBuckets)
	}

	return sortedArray
}
