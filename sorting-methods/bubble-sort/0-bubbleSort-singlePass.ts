import { swapArrayValues } from '../../utils/utils.ts'

export function bubbleSortSinglePass(
	arrayInput: Array<number>,
	// one less than the full array since we look ahead by 1 element
	endPoint: number = arrayInput.length - 1,
) {
	for (let i = 0; i < endPoint; i++) {
		const thisValue = arrayInput[i]
		const nextValue = arrayInput[i + 1]
		// if current value is greater than next value, swap them
		if (thisValue > nextValue) {
			swapArrayValues(arrayInput, i, i + 1)
		}
	}

	return arrayInput
}

bubbleSortSinglePass([7, 12, 9, 11, 3])
